let users = [];

// ADD USER
function addUser() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;

  const user = { firstName, lastName, email, date };
  users.push(user);

  document.getElementById("output").innerHTML += `
    <p>${firstName} ${lastName} added</p>
  `;
}

// SHOW IMAGE
function showImage() {
  document.getElementById("output").innerHTML = `
    <img src="https://via.placeholder.com/150" class="img-fluid">
  `;
}

// SHOW TABLE
function showTable() {
  let table = `
    <table class="table table-bordered">
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
  `;

  users.forEach(user => {
    table += `
      <tr>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });

  table += "</table>";
  document.getElementById("output").innerHTML = table;
}

// PRINT USERS
function printUsers() {
  console.log(users);
}

// CLEAR OUTPUT
function clearOutput() {
  document.getElementById("output").innerHTML = "";
}