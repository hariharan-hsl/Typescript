interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
 
interface ApiData {
  users: User[];
}
 
async function getUsers(): Promise<User[]> {
  const response = await fetch(
    "https://dummyjson.com/users?limit=5"
  );
 
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
 
  const data: ApiData = await response.json();
 
  return data.users;
}
 
getUsers()
  .then((users) => {
    users.forEach((user) => {
      console.log(user.firstName);
      console.log(user.email);
    });
  })
  .catch((error: Error) => {
    console.log(error.message);
  });