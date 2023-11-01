import CryptoJS from 'crypto-js';

export const combineAndHashStrings = (...args) =>  {CryptoJS.SHA256(args.toString().replaceAll(',','')).toString()}