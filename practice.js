var firebaseConfig = {
  apiKey: "AIzaSyDSg1JvYWABnN72uLJbLPaVTdX9plbxCZQ",
  authDomain: "practicee-9e2de.firebaseapp.com",
  databaseURL: "https://practicee-9e2de-default-rtdb.firebaseio.com",
  projectId: "practicee-9e2de",
  storageBucket: "practicee-9e2de.appspot.com",
  messagingSenderId: "395144625619",
  appId: "1:395144625619:web:7c67bbd0a8e75dd6d54326"
};
firebase.initializeApp(firebaseConfig)

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


