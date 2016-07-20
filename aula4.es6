const stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

const filteredStocksByName = 
  stocks
    .filter(stock => stock.quantity >= 70)
    .map(stock => stock.name);

console.log(filteredStocksByName);