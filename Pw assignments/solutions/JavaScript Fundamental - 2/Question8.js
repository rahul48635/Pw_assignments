function countdownToUserDate(userDate) {
    const currentDate = new Date();
    const enteredDate = new Date(userDate);
    const timeDifference = enteredDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }
  
  const userDate = "2025-01-01"; 
  const difference = countdownToUserDate(userDate);
  console.log("Days until " + userDate + ": " + difference+" days");