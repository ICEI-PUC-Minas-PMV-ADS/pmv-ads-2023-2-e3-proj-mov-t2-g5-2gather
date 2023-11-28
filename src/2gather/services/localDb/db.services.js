import * as SQLite from 'expo-sqlite';

export const Database = {
  getConnection: (sql, params) => {
    
    const db = SQLite.openDatabase('twogather');

    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS userAccessKey (id INTEGER PRIMARY KEY AUTOINCREMENT, userId UUID UNIQUE, privateKey TEXT NOT NULL, publicKey TEXT NOT NULL);'
        );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery(sql, params);
  },
};

export default Database;
