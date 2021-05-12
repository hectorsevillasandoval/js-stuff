const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5); // 5
moneyBox(10); // 10

const moneyBoxClosure = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBoxClosure();

myMoneyBox(4); // MoneyBox: $4
myMoneyBox(6); // MoneyBox: $10
myMoneyBox(10); // MoneyBox: $20
