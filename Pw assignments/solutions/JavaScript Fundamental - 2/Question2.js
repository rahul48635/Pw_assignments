function total(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
let a=total(1,2,3,4,5);
console.log(a);