let arr=[1,2,99,56,"Mithun",1234,"PW"];
let str="string";
for(let i of arr){
    if(typeof(i)==str){
        console.log("String found",i);
        break;
    }
}