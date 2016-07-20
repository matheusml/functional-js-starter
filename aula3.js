var stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

var stocksByName = stocks.map(function(stock) {
  return stock.name;
});

console.log(stocksByName);

function byName(obj) {
  return obj.name;
}
var stocksByName = stocks.map(byName);
console.log(stocksByName);