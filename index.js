let userNames = ["Alice", "Bob", "Charlie", "Delta", "Stephen"];
function signup(str) {
  let filetredData = userNames.filter((el, i) => el == str);
  if (filetredData.length == 0) {
    /// i need to push
    userNames.push(str);
    console.log("Signup Sucessfull.....");
  } else {
    console.log("Already Registred....");
  }
}
signup("Venu");
signup("Venu");

function login(str, password) {
  let filetredData = userNames.filter((el, i) => el == str);
  if (filetredData.length == 0) {
    /// i need to push
    console.log("User Not Found...Please Signup");
  } else {
    if (password == "Emp@123") {
      console.log("Login Sucessfull.....");
    } else {
      console.log("Wrong Password....");
    }
  }
}
login("Zebra", "emp@123");
