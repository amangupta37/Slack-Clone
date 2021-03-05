import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCzB8ge-wjs4XGu_CbUT7aJuRPG1ODyi0M",
    authDomain: "slack-clone-21b04.firebaseapp.com",
    projectId: "slack-clone-21b04",
    storageBucket: "slack-clone-21b04.appspot.com",
    messagingSenderId: "493993507889",
    appId: "1:493993507889:web:941a03bdb4bb0808512910"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider}
  export default db;
