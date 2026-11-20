let employeeName: string = "Hariharan";
let employeeAge: number = 22;
let employeeSalary: number = 25000;
let isActive: boolean = true;
let employeeId: string | number = 101;
let skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript"
];

let department: string | null = "IT";


// Employee Details
console.log(" -------------EMPLOYEE DETAILS -------------");
console.log("Name:", employeeName);
console.log("Age:", employeeAge);
console.log("Salary:", employeeSalary);
console.log("Active:", isActive);
console.log("Employee ID:", employeeId);
console.log("Department:", department);


console.log("===== EMPLOYEE SKILLS =====");

// iterate the skills array data:
skills.forEach((skill,index)=>{
    console.log(index+1,skill);
    
});

// Update employee details
employeeAge = 23;
employeeSalary = 60000;


console.log("===== UPDATED DETAILS =====");
console.log("Updated Age:", employeeAge);
console.log("Updated Salary:", employeeSalary);


