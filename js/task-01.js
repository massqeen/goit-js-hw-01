const button1 = document.getElementById('button-1'),
  email = document.getElementById('email'),
  login = document.getElementById('login'),
  solution1 = document.querySelector('.solution-1');

const Account = function (inputLogin, inputEmail) {
  this.login = inputLogin;
  this.email = inputEmail;
};
Account.prototype.getInfo = function () {
  solution1.textContent = `Login: ${this.login}, Email: ${this.email}`;
};

const handleOrdersBtnClick = (event) => {
  event.preventDefault();
  Tinycon.setBubble(1);
  const account = new Account(login.value, email.value);
  account.getInfo();
  console.log(account);
};

discountBtn.addEventListener('click', handleDiscountBtnClick);
ordersBtn.addEventListener('click', handleOrdersBtnClick);
addOrderBtn.addEventListener('click', handleAddOrderBtnClick);
