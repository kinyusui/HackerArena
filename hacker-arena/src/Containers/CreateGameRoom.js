import React from 'react';
import { connect } from 'react-redux';
//import fire from '../firebase';
import updateCurrentGameRoom from '../Actions/updateCurrentGameRoom';
import db from '../Firebase/db';
import { push } from 'react-router-redux';

class CreateGameRoom extends React.Component {
  constructor (props) {
    super (props);
    this.createRoom = this.createRoom.bind(this);
  }
  createRoom () {
    let allProblems = this.props.problems;
    let keys = Object.keys(allProblems);
    let random = Math.floor(Math.random() * keys.length);
    let problem = allProblems[keys[random]];
    const room = {
      challengerName: '',
      challengerTestsPassed: 0,
      challengerCredits: 5,
      challengerTestStatus: [""],
      challengerDisruptions: [""],
      challengerLiveInput: "",
      creatorName: '', //'ron' || this.props.user,
      creatorTestsPassed: 0,
      creatorCredits: 5,
      creatorTestStatus: [""],
      creatorDisruptions: [""],
      creatorLiveInput: "",
      gameStarted: false,
      players: 0,
      winner: "",
      // creatorTestStatus: 
      // challengerTestStatus: 
      problemID: keys[random],
      problem: problem,
      spectators: 0
    };
    db.Rooms.push(room).then(added => {
      room.key = added.key;
      // this.props.updateCurrentGameRoom(room);
      this.props.navigateToGameRoom(added.key);
    })
  

  }
  render () {
    return (
      <div>
        <button onClick={this.createRoom}><h3>Create Game Room</h3></button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    problems: state.problems
  }
}

const mapDispatcherToProps = (dispatch) => {
  return {
    updateCurrentGameRoom: (room) => {dispatch(updateCurrentGameRoom(room))},
    navigateToGameRoom: (id) => {dispatch(push('/GameRoom/' + id))}
  }
}
export default connect(mapStateToProps, mapDispatcherToProps)(CreateGameRoom);


// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }