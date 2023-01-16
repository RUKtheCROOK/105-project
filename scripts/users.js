function showUsers() {
  let users = readUsers();
  let userTbl = "";
  for (let i = 0; i < users.length; i++) {
    userTbl += `<tr>
          <td>${users[i].fname}</td>
          <td>${users[i].lname}</td>
          <td>${users[i].age}</td>
          <td>${users[i].address}</td>
          <td>${users[i].phone}</td>
          <td>${users[i].payment}</td>
          <td>${users[i].color}</td>
          <td>${users[i].email}</td>`;
  }
  // document.getElementById("userList").innerHTML = userTbl;
  $( "#userList" ).append( userTbl);
}

function init() {
  showUsers();
}

window.onload = init;
