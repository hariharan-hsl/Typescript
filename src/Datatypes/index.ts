let EmpName : string = "Hariharan";
let EmpAge : number = 22;
let isEmp : boolean = true;
let data :any = ["React", "Node"];

console.log("Employee Name : ",EmpName);
console.log("Employee Age : ",EmpAge);
console.log("isEmployee : ",isEmp);
console.log("data : ",data);

// unknow:
let unknow_dataype :unknown = "Typescript";
unknow_dataype = 100;
if (typeof unknow_dataype === "number") {
    console.log(unknow_dataype.toFixed(2));
}

// array :
let language:string[] = ["javascript","java","python"];
let marks: number[] = [10,20,30,40,50];
let status:boolean[] = [true,false,true];

// push :
language.push("php");
// language.push(20); ==> error
console.log(language);
console.log(marks);
console.log(status);


