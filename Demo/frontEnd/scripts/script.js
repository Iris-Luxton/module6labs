
let username = "";
let password = "";
let message;

window.onload = () => {
    if(!localStorage.username){
        if (document.location.href != "http://127.0.0.1:5500/labSix/Demo/frontEnd/index.html") {
        {document.location.href = 'index.html', true};
    }
    };
}
if (document.querySelector('#loginform')) {
document.querySelector('#loginform').addEventListener("submit", send);
}

function send (e) {
   e.preventDefault();
   console.log(username);
   if (!message) {
     document.querySelector(".alertContainer").style.display = "block";
   } else {
     fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({ username: username, password: password })   
     }).then(response => response.json())
     .then(response => {
        if (!JSON.stringify(response.username)) {
            document.querySelector(".alertContainer").style.display = "block";
            document.querySelector(".alertContainer").innerText = JSON.stringify(response.message);
            return;
        }
        localStorage.setItem("username", JSON.stringify(response.username));
        document.location.href = "home.html"
     });
    }   
}

if (document.querySelectorAll('.formValue')) {
document.querySelectorAll('.formValue').forEach( item => item.addEventListener('blur', test));
}

function test(e) {
    console.log(e.target)
    if (e.target.id == "username"){
        username = e.target.value;
        if (/\d/.test(username) && !/\d$/.test(username)) {
            message = false;
        } else {
            message = true;
        }
    } else {
        password = e.target.value;
        if (!/(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{4,})/.test(password)) {
            message = false;
        } else {
            message = true;
        }
    }
}