function login(){
let email = $("#txtEmail").val();
let password = $("#txtPassword").val();
let users = readUsers();
let valid = false;

for (let i = 0; i < users.length; i++) {
if (users[i].email === email && users[i].password === password) {
          valid=true;
         window.location = "users.html"}; }if(valid==false){
        alert ("Invalid email or password please try again or go to register page");}}

function init(){
    $("#btnLogin").click(login);
}

window.onload = init;