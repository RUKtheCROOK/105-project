function saveUser(user) {
  let oldUsers = readUsers();
  oldUsers.push(user);
  console.log(user); // this is obj
  let val = JSON.stringify(oldUsers); // parse the obj into string
  console.log(val); //this is string
  localStorage.setItem("users", val);
}

function readUsers() {
  let users = localStorage.getItem("users");
  console.log(users);

  if (!users) {
    return [];
  } else {
    return JSON.parse(users);
    console.log(users);
  }
}
