let employees = [];
let editIndex = null;

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");
const tableBody = document.querySelector("#employee-table tbody");

// eventListener for adding or updating employee

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value.trim();

  // case1 -> for any value missing

  if (!name || !email || !role) return;
  const employeeData = { name, email, role };

  if (editIndex == null) {
    employees.push(employeeData);
  } else {
    employees[editIndex] = employeeData;
    editIndex = null;
    form.querySelector("button").innerHTML = "Add Employee";
  }

  form.reset();

  renderTable();
});

function renderTable() {
  tableBody.innerHTML = "";
  employees.forEach((emp, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.role}</td>
        <td  class="action-btns">
        
        <button onClick="editEmployee(${index})">Edit</button>
        <button onClick="deleteEmployee(${index})">Delete</button>
        </td>
        
        `;

        tableBody.appendChild(row);
  });
}

//Edit employee
function editEmployee(index){
    const emp = employees[index];
    nameInput.value=emp.name;
    emailInput.value=emp.email;
    roleInput.value=emp.role;
    editIndex=index;
    form.querySelector("button").innerHTML="Update Employee";
}

// Delete Employee
function deleteEmployee(index){
    if(confirm("You want to delete Employee ??"));{
        employees.splice(index,1);
        renderTable();
    }
}