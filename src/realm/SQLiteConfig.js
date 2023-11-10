// SQLiteConfig.js
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'login.db', location: 'default'},
  () => {
    console.log('데이터베이스가 성공적으로 열렸습니다');
  },
  error => {
    console.error('데이터베이스 열기 중 오류 발생', error);
  },
);

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);',
    [],
    () => {
      console.log('테이블이 성공적으로 생성되었습니다');
    },
    error => {
      console.error('테이블 생성 중 오류 발생', error);
    },
  );
});

export default db;
