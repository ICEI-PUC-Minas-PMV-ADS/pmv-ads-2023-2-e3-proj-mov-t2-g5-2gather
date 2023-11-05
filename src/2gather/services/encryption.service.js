import CryptoJS from 'crypto-js';
import E2E from 'react-native-e2e-encryption';
import { secretbox, box } from 'tweetnacl';
import { Buffer } from 'buffer';

export const combineAndHashStrings = (...args) => { CryptoJS.SHA256(args.toString().replaceAll(',', '')).toString() }

//God forgive me...
let SymmetricEncKeys = {}
let SymmetricDecKeys = {}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomBytes = (length) => {
  const uint8Array = new Uint8Array(length);
  for (let i = 0; i < uint8Array.length; i++) {
    uint8Array[i] = randomInt(1, 255); 
  }
  return uint8Array;
}
const newNonceS = () => randomBytes(secretbox.nonceLength);
const newNonceA = () => randomBytes(box.nonceLength);

function GetShared(publicKey, privateKey) {
  const publicKeyAsUint8Array = decodeBase64(publicKey);
  const privateKeyAsUint8Array = decodeBase64(privateKey);
  return encodeBase64(
    box.before(publicKeyAsUint8Array, privateKeyAsUint8Array),
  );
}

function decodeUTF8(string) {
  let i; const d = unescape(encodeURIComponent(string)); const
    b = new Uint8Array(d.length);
  for (i = 0; i < d.length; i += 1) b[i] = d.charCodeAt(i);
  return b;
}

function encodeUTF8(array) {
  let i; const
    string = [];
  for (i = 0; i < array.length; i += 1) string.push(String.fromCharCode(array[i]));
  return decodeURIComponent(escape(string.join('')));
}

function encodeBase64(array) {
  return Buffer.from(array).toString('base64');
}

function decodeBase64(string) {
  return new Uint8Array(Array.prototype.slice.call(Buffer.from(string, 'base64'), 0));
}

function EncryptSymmetricKey(publicKey, privateKey) {
  const symmetricKey = encodeBase64(randomBytes(32));

  const nonce = newNonceA();
  const finalKey = GetShared(publicKey, privateKey);
  const pubKeyAsUint8Array = decodeBase64(finalKey);

  const messageUint8 = decodeUTF8(JSON.stringify({ key: symmetricKey }));

  const encrypted = box.after(messageUint8, nonce, pubKeyAsUint8Array);

  const fullMessage = new Uint8Array(nonce.length + encrypted.length);
  fullMessage.set(nonce);
  fullMessage.set(encrypted, nonce.length);

  return {
    raw: symmetricKey,
    enc: encodeBase64(fullMessage),
  };
}

function DecryptSymmetricKey(messageWithNonce, publicKey, privateKey) {
  const finalKey = GetShared(publicKey, privateKey);
  const privateKeyAsUint8Array = decodeBase64(finalKey);
  const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
  const nonce = messageWithNonceAsUint8Array.slice(0, box.nonceLength);
  const message = messageWithNonceAsUint8Array.slice(
    box.nonceLength,
    messageWithNonce.length,
  );

  const decrypted = box.open.after(message, nonce, privateKeyAsUint8Array);

  if (!decrypted) {
    return null
    throw new Error('Could not decrypt the key');
  }

  const jsonObject = JSON.parse(encodeUTF8(decrypted));
  return jsonObject.key;
}

export function Decrypt(cipherText, senderPublicKey, privateKey) {
  const dataParts = cipherText.split('.');
  if (dataParts.length !== 2) {
    return { 'message': "Couldn't decrypt the message" }
  }

  let symmetricKey;

  if (!SymmetricDecKeys[senderPublicKey] || !SymmetricDecKeys[senderPublicKey].hasOwnProperty(dataParts[1])) {
    symmetricKey = DecryptSymmetricKey(dataParts[1], senderPublicKey, privateKey);
    if (!symmetricKey)
      return { 'message': "Couldn't decrypt the message" }
    SymmetricDecKeys[senderPublicKey] = { [dataParts[1]]: symmetricKey }
  } else {
    symmetricKey = SymmetricDecKeys[senderPublicKey][dataParts[1]];
  }

  const keyUint8Array = decodeBase64(symmetricKey);
  const messageWithNonceAsUint8Array = decodeBase64(dataParts[0]);

  const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
  const message = messageWithNonceAsUint8Array.slice(
    secretbox.nonceLength,
    dataParts[0].length,
  );

  const decrypted = secretbox.open(message, nonce, keyUint8Array);

  if (!decrypted) {
    return { 'message': "Couldn't decrypt the message." }
  }

  const base64DecryptedMessage = encodeUTF8(decrypted);
  return JSON.parse(base64DecryptedMessage);
}

export function Encrypt(plainText, receiverPubKey, privateKey) {
  let symmetricKey;

  if (!SymmetricEncKeys[receiverPubKey]) {
    symmetricKey = EncryptSymmetricKey(receiverPubKey, privateKey); //vou considerar que a key nunca existe por hora.
    SymmetricEncKeys[receiverPubKey] = symmetricKey
  } else {
    symmetricKey = SymmetricEncKeys[receiverPubKey];
  }

  const nonce = newNonceS();
  const keyUint8Array = decodeBase64(symmetricKey.raw);

  if (typeof plainText !== 'object') {
    throw new Error('Only JSON object accepted as an input');
  }

  const messageUint8 = decodeUTF8(JSON.stringify(plainText));
  const newBox = secretbox(messageUint8, nonce, keyUint8Array);

  const fullMessage = new Uint8Array(nonce.length + newBox.length);
  fullMessage.set(nonce);
  fullMessage.set(newBox, nonce.length);

  const fullMessageAsBase64 = encodeBase64(fullMessage);

  return `${fullMessageAsBase64}.${symmetricKey.enc}`;
}

export const createE2E = async (uuid) => {
  try {
    const e2e = new E2E('', '', {});
    return e2e
  } catch (error) {
    console.log('Error', 'Failed to save secret key.', error);
  }
  return null;
};