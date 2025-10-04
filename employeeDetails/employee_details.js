// Employee data
const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 ,specialization:'python'},
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization:'JavaScript' },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization:'java' },
  { id: 4, name: 'Mairaj Ali', age: 25, department: 'SE', salary: 80000,specialization:'c++' },
  //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display only HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find employee by ID
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =
      `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'No employee found with this ID.';
  }
}
function displayJavaScriptEmployees() {
    // Filter employees with specialization in JavaScript
    const jsEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
  
    // Convert list into HTML
    const jsEmployeesDisplay = jsEmployees
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`)
      .join('');
  
    // Display in browser
    document.getElementById('employeesDetails').innerHTML = jsEmployeesDisplay || 'No employees found with JavaScript specialization.';
  }
  
