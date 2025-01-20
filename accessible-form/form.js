const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fname = document.getElementById("fname").value;
  console.log(fname);

  const lname = document.getElementById("lname").value;
  console.log(lname);

  const uname = document.getElementById("uname").value;
  console.log(uname);

  const email = document.getElementById("email").value;
  console.log(email);

  const password = document.getElementById("password").value;
  console.log(password);

  const address = document.getElementById("address").value;
  console.log(address);

  const state = document.getElementById("state").value;
  console.log(state);

  const city = document.getElementById("city").value;
  console.log(city);

  const radio1 = document.getElementById("radio1").value;
  console.log(radio1);
});


function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}







function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function validateForm() {
  var returnval = true;
  clearErrors();

  var fname = document.forms["myForm"]["fname"].value;
  if (fname.length < 5) {
    seterror("fname", "*Length of name is too short!");
    returnval = false;
  }

  var lname = document.forms["myForm"]["lname"].value;
  if (lname.length < 5) {
    seterror("lname", "*Length of name is too short!");
    returnval = false;
  }

  var uname = document.forms["myForm"]["uname"].value;
  if (uname.length < 5) {
    seterror("uname", "*Length of name is too short!");
    returnval = false;
  }

  var email = document.forms["myForm"]["email"].value;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(email)) {
    seterror("email", "");
    returnval = false;
  }
  else{
    seterror("email", "*Email Invalid!");
  }

  var password = document.forms['myForm']["fpass"].value;
  if (password.length < 6) {
    seterror("pass", "*Password should be atleast 6 characters long!");
    returnval = false;
  }

  var textarea = document.forms["myForm"]["textarea"].value;
  if (textarea.length == 0) {
    seterror("textarea", "*Please enter your address!");
    returnval = false;
  }

  var state = document.forms["myForm"]["state"].value;
  if (state.length > 0) {
    seterror("state", "*Please Select your State!");
    returnval = false;
  }

  var city = document.forms["myForm"]["city"].value;
  if (city.length > 0) {
    seterror("city", "*Please Select your City!");
    returnval = false;
  }

  var check = document.forms["myForm"]["check"].value;
  if (check.checked = true) {
    seterror("check", "*Please Select Check-box!");
    returnval = false;
  }

  return returnval;
}
