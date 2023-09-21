const ctx = document.getElementById('myChart');
var Uname = JSON.parse(localStorage.getItem('unameKey'));


const incomes = JSON.parse(localStorage.getItem(`income_${Uname}`));
incomeArr =[];
incomes.forEach(e=> {
    incomeArr.push(e.amt);
});
// console.log(incomeArr);

const expense = JSON.parse(localStorage.getItem(`expns_${Uname}`));
expenseArr =[];
expenseArrTitle =[];
expense.forEach(e=> {
    expenseArr.push(e.e);
    expenseArrTitle.push(e.t);
});
// console.log(expenseArr);

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: expenseArrTitle,
    datasets: [{
      label: 'expense of ',
      data: expenseArr,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});