//YOUR FIRE BASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCall6grbB9deEwYNEPK5ADh8c5KnSww2c",
    authDomain: "deutjky.firebaseapp.com",
    databaseURL: "https://deutjky-default-rtdb.firebaseio.com",
    projectId: "deutjky",
    storageBucket: "deutjky.appspot.com",
    messagingSenderId: "886297341127",
    appId: "1:886297341127:web:402d7fbb36dac6ff31e2e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

login_name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="Welcome " + login_name + "!";
function addroom() {
      room=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room);
      window.location="kwitter_page.html";
      
}










function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id='" + Room_names + "'onclick='redirectetoroomname(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectetoroomname(name) {
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}

