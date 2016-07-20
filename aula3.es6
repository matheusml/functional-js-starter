const stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

const stocksByName = stocks.map(stock => stock.name);

console.log(stocksByName);

const byName = obj => obj.name;

const stocksByName = stocks.map(byName);
console.log(stocksByName);