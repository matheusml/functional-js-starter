var stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

var filteredStocksByName = 
  stocks
    .filter(function(stock) {
      return stock.quantity >= 70;
    })
    .map(function(stock) {
      return stock.name;
    });

console.log(filteredStocksByName);