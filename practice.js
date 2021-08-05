//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCXoNLUpidXoeaA-fmEzxxj0hXAOY0Diyg",
    authDomain: "kwitter-27083.firebaseapp.com",
    databaseURL: "https://kwitter-27083-default-rtdb.firebaseio.com",
    projectId: "kwitter-27083",
    storageBucket: "kwitter-27083.appspot.com",
    messagingSenderId: "669124631718",
    appId: "1:669124631718:web:34d45aa5a461cb63412867",
    measurementId: "G-YMRQBVN5FD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function add_user(){

var user = document.getElementById("user_name").value;
var age  = document.getElementById("user_age").value;

document.getElementById("user_name").value = "";
document.getElementById("user_age").value = "";


firebase.database().ref("/").child(user).update({

UserName : user,
age:age

});

  }