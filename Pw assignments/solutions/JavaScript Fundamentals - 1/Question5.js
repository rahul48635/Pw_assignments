let input=prompt("Enter the type of package");
switch(input){
    case "standard":
        alert("It would take 3 to 5 days to deliver");
        break;
    case "express":
        alert("It would take 1 to 2 days to deliver");
        break;
    case "overnight":
        alert("It will be delivered by tomorrow");
        break;
    default:
        alert("Invalid Input");
}