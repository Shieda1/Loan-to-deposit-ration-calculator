// https://calculator.swiftutors.com/loan-to-deposit-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const loanToDepositRatioRadio = document.getElementById('loanToDepositRatioRadio');
const loansRadio = document.getElementById('loansRadio');
const depositsRadio = document.getElementById('depositsRadio');

let loanToDepositRatio;
let loans = v1;
let deposits = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

loanToDepositRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Loans';
  variable2.textContent = 'Deposits';
  loans = v1;
  deposits = v2;
});

loansRadio.addEventListener('click', function() {
  variable1.textContent = 'Loan to Deposit Ratio(%)';
  variable2.textContent = 'Deposits';
  loanToDepositRatio = v1;
  deposits = v2;
});

depositsRadio.addEventListener('click', function() {
  variable1.textContent = 'Loan to Deposit Ratio(%)';
  variable2.textContent = 'Loans';
  loanToDepositRatio = v1;
  loans = v2;
});


btn.addEventListener('click', function() {
  
  if(loanToDepositRatioRadio.checked)
    result.textContent = `Loan to Deposit Ratio = ${computeLoanToDepositRatio().toFixed(2)}%`;

  else if(loansRadio.checked)
    result.textContent = `Loans = ${computeLoans().toFixed(2)}`;

  else if(depositsRadio.checked)
    result.textContent = `Deposits = ${computeDeposits().toFixed(2)}`;
})

// calculation

function computeLoanToDepositRatio() {
  return (Number(loans.value) / Number(deposits.value)) * 100;
}

function computeLoans() {
  return (Number(loanToDepositRatio.value) / 100) * Number(deposits.value);
}

function computeDeposits() {
  return Number(loans.value) / (Number(loanToDepositRatio.value) / 100);
}