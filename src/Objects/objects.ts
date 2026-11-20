
//  Type
type EmployeeData = {
  id: number;
  name: string;
  department: string;
};

// Interface
interface Employee {
  readonly id: number;
  name: string;
  email?: string;
  department: string;
}

// Create an employee object using the interface
const employee1: Employee = {
  id: 101,
  name: "Hari",
  email: "hari@gmail.com",
  department: "IT"
};


const employee2: Employee = {
  id: 102,
  name: "Surya",
  department: "IT"
};

//  Print employee details
function printEmployee(e: Employee): void {
  console.log("Employee ID:", e.id);
  console.log("Name:", e.name);
  console.log("Email:", e.email || "No email");
  console.log("Department:", e.department);
}

// Interface extends: Manager inherits Employee properties
interface Manager extends Employee {
  teamSize: number;
}

//  Create a manager
const manager: Manager = {
  id: 103,
  name: "Dhanush",
  department: "IT",
  teamSize: 10
};

//  Type: Define product 
type Product = {
  readonly id: number;
  title: string;
  price: number;
};

// Create a product object
const product: Product = {
  id: 1,
  title: "Laptop",
  price: 50000
};


printEmployee(employee1);
printEmployee(employee2);


console.log("Manager:", manager);
console.log("Product:", product);
