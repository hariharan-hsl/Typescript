
// Union Types – Multiple types:

let userId : string | number;
userId = "AA120";
userId=533;
// userId=true; ==> error
console.log(userId);

let result: string | number;

result = "Success";
result = 200;
console.log(result);

// literals:
type Status = "Loading"|"success"|"error";
//  let currentStatus:Status;
//  currentStatus="Loading";
//  currentStatus="success";
//  currentStatus="error";

// console.log(currentStatus);

// getEmpmessage
function getEmpmessage(status:Status):string{
    switch (status) {
        case "Loading":
            return "Employee data is loading";
        case "success":
            return "Employee data loaded successfully";
        case "error":
            return "Unable to load employee data";
    }
}
console.log(getEmpmessage("Loading"));

function formatID( id: string|number):string{
    if(typeof id === "number"){

        return `id: ${id}`
    }

    else{
        return id;
    }
}
console.log(formatID(45));



// Null and Undefined:
// let username: string | null;
// username=null;
// console.log(username);


// let email:string | undefined;
// email="user@gmail.com";
// email=undefined;
// console.log(email);



