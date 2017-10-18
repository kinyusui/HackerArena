import fire from './firebase.js';

const db = {};

db.Users = fire.database().ref('users');
db.Problems = fire.database().ref('problems');
db.Rooms = fire.database().ref('rooms');
db.BoardRooms = fire.database().ref('BoardRooms');

export default db;
