const firebaseConfig = {
    apiKey: "AIzaSyCwz-_fad0oP8apudsye1aQ1smJ09iZevc",
    authDomain: "project-94-33b0b.firebaseapp.com",
    databaseURL: "https://project-94-33b0b-default-rtdb.firebaseio.com",
    projectId: "project-94-33b0b",
    storageBucket: "project-94-33b0b.appspot.com",
    messagingSenderId: "996914573701",
    appId: "1:996914573701:web:eed95ffb48704c253154ec"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      
        document.getElementById("output").innerHTML = "";
      
        snapshot.forEach(function (childSnapshot) {
         
            childKey = childSnapshot.key;
            Room_names = childKey;
         
            console.log("room name- " + Room_name)
          
            row = "<div class = 'room_name' id="+Room_names+"omclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
            
            document.getElementById("output").innerHTML += row;
            
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
  
    locatStorage.setItem("room_name", name);
  
    window.location = "kwitter_room.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}
