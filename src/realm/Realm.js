import Realm, {schemaVersion} from 'realm';

class User extends Realm.Object {}
User.schema = {
  name: 'User',
  properties: {
    id: 'string',
    password: 'string',
    address: 'string',
    username: 'string',
    nickName: 'string',
    userImg: 'string',
  },
  primaryKey: 'id',
};

const realm = new Realm({
  schema: [User],
  path: 'myrealm.realm',
  schemaVersion: 1,
});

// realm.close();
const users = realm.objects('User');
console.log(users);

console.log(realm.schemaVersion);

// 데이터 삭제 트랜잭션
// realm.write(() => {
//   realm.deleteAll();
//   console.log(users);
// });

export default realm;
