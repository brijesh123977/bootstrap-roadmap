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
