const stocks = [
  { name: 'AMBEV',  price: 3,  quantity: 100 },
  { name: 'VALE',   price: 10, quantity: 50  },
  { name: 'NATURA', price: 5,  quantity: 70  },
];

const stocksQuantitySum = 
  stocks
    .reduce((acc, current) => {
        if (current.price >= 5) {
          return acc + current.quantity;
        }
        return acc;
    }, 0);

console.log(stocksQuantitySum);