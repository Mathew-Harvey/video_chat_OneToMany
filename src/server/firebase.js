import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCPd6L3Qmn8wt5J8vIuK4-JJuT5_tSNPJ4", // Add API Key
  databaseURL:"https://rxwebrtc-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("Please tell us your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
