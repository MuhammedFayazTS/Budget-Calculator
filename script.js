var income = document.getElementById('income')
var expenseAmount = document.getElementById('expenseAmount')
var expenseType = document.getElementById('expenseType')
var balanceAmt = document.getElementById('balanceAmt');
var spendAmt = document.getElementById('spendAmt')
var incomeType =document.getElementById('incomeType')

balance = JSON.parse(localStorage.getItem('income'))

function submitIncome(){
    amt = income.value
    amtType = incomeType.value
    let addMoney ={
        amt,
        amtType
    } 
    amtArr =[];
    if(amt !== '' && amtType !== ''){
        
        Temp = JSON.parse(localStorage.getItem('income'))
        if(Temp !== null){
            Temp.forEach(a=>amtArr.push(a))
        }
        amtArr.push(addMoney);
        localStorage.setItem('income',JSON.stringify(amtArr));
        alert('Income added successfully')
        location.reload();
        
        // console.log(addMoney);
        // localStorage.setItem('income',JSON.stringify(addMoney))
    // console.log(income.value);
    // localStorage.setItem('income',income.value)
    }
    else{
        alert('Enter amount!!')
    }
}
if(balance === null ){
    balanceAmt.innerHTML = 0;
}
else{
    sum=0;
    balance.forEach(a=>sum+=Number(a.amt))
    balanceAmt.innerHTML = sum;
}
spendAmt.innerText = 0;


function submitExpense(){
    e=expenseAmount.value;
    t=expenseType.value
    let expense={
        e,
        t
    }
    exps = [];
    if(e !== '' && t !== ''){
        Expns = JSON.parse(localStorage.getItem('expns'))
        if(Expns !== null){
        Expns.forEach(a=>exps.push(a))
    }
    exps.push(expense);
    localStorage.setItem('expns',JSON.stringify(exps))
    alert(`submitted`)
    location.reload();
}
else{
    alert('Enter amount!!')
}
    // localStorage.setItem('Expense',JSON.stringify(expense));
}
exp = JSON.parse(localStorage.getItem('expns'));
if(exp !== null){
    let spent = 0;
    exp.forEach(a=> {
        spent += Number(a.e);
    });
    balanceAmt.innerText -= spent;
    spendAmt.innerText = Number(spent);   
}

function logout(){
    localStorage.clear();
    window.location='./index.html'
}


if(balance !== null){
    total=0;
    balance.forEach(a=> {
        IncomeTable.innerHTML += `
                    <tr>
                    <td >${a.amtType}</td>
                      <td >${a.amt}</td>
                      <td >${total+=Number(a.amt)}</td>
                    </tr>
        `
    }); 
}

if(exp !== null){
    tempSum=sum;
    exp.forEach(a=> {
        tempSum-=a.e;
        ExpenseTable.innerHTML += `
                    <tr>
                    <td >${a.t}</td>
                      <td >${a.e}</td>
                      <td >${tempSum}</td>
                    </tr>
        `
    }); 
}
var table_box1 = document.getElementById('table_box1');
var table_box2 = document.getElementById('table_box2')

function viewMore(){
    table_box1.classList.toggle('d-none')
    table_box2.classList.toggle('d-none')
    if(table_box1.classList.contains('d-none')){
        viewmore.innerText = 'View More';
    }
    else{
        viewmore.innerText = 'View Less';
    }
}