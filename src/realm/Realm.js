import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
  name: 'User',
  properties: {
    id: 'string',
    password: 'string',
    address: 'string',
    username: 'string',
    userImg: 'string',
    nickName: 'string',
  },
};

const realm = new Realm({
  schema: [User],
  schemaVersion: 3,
});
// realm.close();
const users = realm.objects('User');
console.log(users);

// 데이터 삭제 트랜잭션
// realm.write(() => {
//   realm.deleteAll();
//   console.log(users);
// });

export default realm;
