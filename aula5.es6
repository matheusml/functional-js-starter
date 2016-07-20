const stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

const stocksQuantitySum = 
  stocks
    .filter(stock => stock.price >= 5)
    .map(stock => stock.quantity)
    .reduce((acc, current) => acc + current, 0);

console.log(stocksQuantitySum);