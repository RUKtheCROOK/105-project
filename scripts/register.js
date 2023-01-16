//JavaScript
//document.getElementById("txtFirstName").style.display="none";

//jQuery(css-selectors)
//let copy = $(".form").clone();
//$(".form").slideUp(5000);

function User(
  firstname,
  lastname,
  age,
  address,
  phone,
  payment,
  color,
  email,
  password
) {
  this.fname = firstname;
  this.lname = lastname;
  this.age = age;
  this.address = address;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
  this.email = email;
  this.password = password;
}

function validation(user) {
  let isValid = true;

  if (user.email == "") {
    isValid = false;
    // $("#txtEmail").css("border", "2px solid red");
    $("#txtEmail").addClass("alert-error");
  }
  if (user.password == "") {
    isValid = false;
    $("#txtPassword").addClass("alert-error");
  }
  if (user.fname == "") {
    isValid = false;
    $("#txtFirstName").addClass("alert-error");
  }
  if (user.lname == "") {
    isValid = false;
    $("#txtLastName").addClass("alert-error");
  }
  if (user.age == "") {
    isValid = false;
    $("#txtAge").addClass("alert-error");
  }
  if (user.address == "") {
    isValid = false;
    $("#txtAddress").addClass("alert-error");
  }
  if (user.phone == "") {
    isValid = false;
    $("#txtPhone").addClass("alert-error");
  }
  // if(user.fname.length<3){
  //     isValid=false;
  // }
  // if(user.lname.length<3){
  //     isValid=false;
  // }
  // if(user.age<18){
  //     isValid=false;
  // }
  // if(user.phone.length<10){
  //     isValid=false;
  // }
  return isValid;
}

let inputFname = $("#txtFirstName");
let inputLname = $("#txtLastName");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");

function register() {
  let newUser = new User(
    inputFname.val(),
    inputLname.val(),
    inputAge.val(),
    inputAddress.val(),
    inputPhone.val(),
    inputPayment.val(),
    inputColor.val(),
    inputEmail.val(),
    inputPassword.val()
  );
  if (validation(newUser) == true) {
    saveUser(newUser); // this fn is on the storeManager
    $("input").val("");
  }
}

function init() {
  //hook events
  $("#btnAdd").click(register);
}

window.onload = init;
