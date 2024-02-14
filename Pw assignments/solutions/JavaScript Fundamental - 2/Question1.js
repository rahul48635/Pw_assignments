"use strict";
let arr = ["user1", "user2", "user3"];
function isuser(usr) {
  for (let i of arr) {
    if (i == usr) {
      console.log(`Yes, ${i} is a valid user`);
      break;
    }
    else if(usr!=i) {
      console.log(`Sorry, ${i} is not a valid user`);
    }
  }
}
isuser("user3");
