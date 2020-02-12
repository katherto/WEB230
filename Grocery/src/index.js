const produce = [
  {
    name: "Banana",
    color: "Yellow",
    type: "Fruit",
    quantity: 6,
    chilled: false
  },
  {
    name: "Lettuce",
    color: "Green",
    type: "Vegetable",
    quantity: 1,
    chilled: true
  },
  {
    name: "Apple",
    color: "Red",
    type: "Fruit",
    quantity: 12,
    chilled: false
  }
];

const cart = produce
  .map(item => {
    return `
    <p>Name: ${item.name}</p>
    <p>Color: ${item.color}</p>
    <p>Type: ${item.type}</p>
    <p>Quantity: ${item.quantity}</p>
    <p>Refridgerated: ${item.chilled ? `Yes` : `No`}</p>
  `;
  })
  .join("<hr>");

document.getElementById("app").innerHTML = cart;
