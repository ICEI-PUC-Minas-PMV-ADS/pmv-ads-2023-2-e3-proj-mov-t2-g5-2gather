import Database from './db.services.js'

const DB_EXEC = Database.getConnection;


export const dbGetE2e = async (userId) => {
  try {
    const sql = 'SELECT * FROM userAccessKey WHERE userId = ?';
    const params = [userId];
    let result = await DB_EXEC(sql, params);
    if (result.rows.length > 0) {
      return result.rows.item(0);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving user access key:', error);
    throw error;
  }
};

export const dbSetE2e = async (userId, privateKey, publicKey) => {
  try {
    const sql = 'INSERT INTO userAccessKey(userid, privatekey, publickey) VALUES (?, ?, ?)';
    const params = [userId, privateKey, publicKey];

    let result = await DB_EXEC(sql, params);

    return result.rowsAffected;
  } catch (error) {
    console.error('Error inserting user access key:', error);
    throw error;
  }
};