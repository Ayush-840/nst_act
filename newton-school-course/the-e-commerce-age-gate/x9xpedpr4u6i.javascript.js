//create the function and give the exact same name as asked in the problem statement, return the final output through function. 

function findAdultCustomers(ages) {
  let adultList = [];

  for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      adultList.push(ages[i]);
    }
  }

  return adultList;
}