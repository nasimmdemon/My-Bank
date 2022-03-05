const Button = document.getElementById("button");
const loginArea = document.getElementById("login-area");
const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
// Add Deposit Buttn
const depositBtn = document.getElementById("addDeposit");

// Login Button Click Event
Button.addEventListener("click", function () {
  const bankArea = document.getElementById("bankArea");
  bankArea.style.display = "block";
  loginArea.style.display = "none";
});

// Deposit Button click Event

depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);
  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositnumber = parseFloat(currentDeposit);
  const totalDeposit = currentDepositnumber + depositNumber;

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = totalBalance;
  document.getElementById("currentDeposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";
});

// Withdraw Button Click Event
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount);
  const displayWithdraw = document.getElementById("total-withdraw").innerText;
  const displayWithdrawNumber = parseFloat(displayWithdraw);
  const totalWithdraw = displayWithdrawNumber + withdrawNumber;
  document.getElementById("total-withdraw").innerText = totalWithdraw;
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const lastBalance = currentBalanceNumber - withdrawNumber;
  document.getElementById("withdrawAmount").value = "";
  document.getElementById("currentBalance").innerText = lastBalance;
});
