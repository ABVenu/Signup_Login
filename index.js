let userNames = ["Alice","Bob", "Charlie", "Delta", "Stephen"];
function signup(str){
    let filetredData = userNames.filter((el,i)=> el==str);
   if(filetredData.length==0){
    /// i need to push
    userNames.push(str)
    console.log("Signup Sucessfull.....")
   }else{
    console.log("Already Registred....")
   }
}
signup("Venu")
signup("Venu")
