const existingUsernames = new Set();

function isUsernameAvailable(username) {
  if (existingUsernames.has(username)) {
    return false;
  }
  let flag=0;
  const charSet = new Set(username);
  for(let i of existingUsernames){
  if(username===i && charSet.size==username.length){
    flag=1;
    break;
  }
  }
  if(flag==1){
    return false;
  }
  else{
    return true;
  
  }
}
existingUsernames.add("user1");
console.log(isUsernameAvailable("user1"));
console.log(isUsernameAvailable("newuser"));