

// functions:
function show(): void {
    console.log("Function Called !");
}

show();

// Function Parameters:
function add(a:number,b:number):number{
    return a+ b;
}
console.log(add(10,20));


// Optional Parameters
function employeeDetails(
    name:string,
    age?:number
):void{
    console.log("Name :",name);
    console.log("age :",age)
    
}
employeeDetails("Hari");
employeeDetails("user",22);

// Default Parameters
function welcomeUser(
    name: string,
    city: string = "Chennai"
): void {

    console.log("Name:", name);
    console.log("City:", city);
}

welcomeUser("Hari");

welcomeUser("Kumar", "Bangalore");

// Arrow Functions:
const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 4));

