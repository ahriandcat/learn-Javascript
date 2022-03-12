function calcSalary(hoursWorked, hourlySalary) {
  let grossSalary = hoursWorked * hourlySalary;
  let avgHours = hoursWorked / 25;
  if (avgHours >= 8) {
    netSalary = grossSalary + 500000;
    console.log("Salary : "+netSalary);
  } else {
    netSalary = grossSalary - 500000;
    console.log("Salary : "+netSalary);
  }
}

calcSalary(200, 25000);
