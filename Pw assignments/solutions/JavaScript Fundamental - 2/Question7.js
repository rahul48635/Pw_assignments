function generateotp(){
    return Math.floor(1000+Math.random()*9000);
}
let a=generateotp();
console.log(`here is your otp: `+ a);
