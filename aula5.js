var stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

var stocksQuantitySum = 
  stocks
    .filter(function(stock) {
      return stock.price >= 5;
    })
    .map(function(stock) {
      return stock.quantity;
    })
    .reduce(function(acc, current) {
      return acc + current;
    }, 0);

console.log(stocksQuantitySum);