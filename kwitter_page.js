const firebaseConfig = {
    apiKey: "AIzaSyDlLB4a62C9pbNyhoY1ybzJOoBFY2_WeNo",
    authDomain: "testin-6ead5.firebaseapp.com",
    databaseURL: "https://testin-6ead5-default-rtdb.firebaseio.com",
    projectId: "testin-6ead5",
    storageBucket: "testin-6ead5.appspot.com",
    messagingSenderId: "262305007511",
    appId: "1:262305007511:web:393130c78b946d8db7e6d2",
    measurementId: "G-41P7H0JVN1"
  };
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")  ;
document.getElementById("user_name").innerHTMLm = "welcome" + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

          localStorage.setItem("room_name",room_name);

          window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    
    document.getElementById("output").innerHTML += row;

});});}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

