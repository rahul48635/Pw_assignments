'use strict';
let usr="admin";
let pass="12345";
let check=prompt("Enter username");
let check1=prompt("Enter password");
if(check==usr && check1==pass){
    alert("Login successful");
}
else{
    alert("Login failed");
}