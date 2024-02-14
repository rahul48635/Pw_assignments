const students=[
    {
        name:"mithun",
        marks: 95,
    },
    {
        name:"prabir",
        marks:75,
    },
    {
        name:"alka",
        marks:92,
    },
    {
        name:"shivam",
        marks:71,
    },
    {
        name:"farman",
        marks:99,
    },
];
for(let i of students){
    if(i.marks>90){
        console.log("Congratulations "+i.name+" you have cleared the exam");
    }
}