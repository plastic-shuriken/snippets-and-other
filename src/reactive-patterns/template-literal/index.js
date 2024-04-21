const pizzaRecipe = (pizza) => `<div class="pizza-recipe">
<h1>${pizza.name}</h1>
<h3>Toppings: ${pizza.toppings.join(", ")}</h3>
<p>${pizza.description}</p>
</div>`;

function pizzaRecipeList(pizzas) {
  return `<div class="pizza-recipe-list">
    ${pizzas.map(pizzaRecipe).join('')}
  </div>`
}

const allPizzas = [
  {
    name: 'Margherita',
    toppings: ['tomato sauce', 'mozzarella'],
    description: 'A classic pizza with fresh ingredients.',
  },
  {
    name: 'Pepperoni',
    toppings: ['tomato sauce', 'mozzarella', 'pepperoni'],
    description: 'A favorite among many, topped with delicious pepperoni.',
  },
  {
    name: 'Veggie Supreme',
    toppings: [
      'tomato sauce',
      'mozzarella',
      'bell peppers',
      'onions',
      'mushrooms',
    ],
    description: 'A delightful vegetable-packed pizza.',
  },
];

function renderPizzas() {
 document.querySelector("#pizzaContainer").innerHTML = pizzaRecipeList(allPizzas);  
}

renderPizzas();

function addPizza() {
  allPizzas.push({
    name: 'Hawaiian',
    toppings: ['tomato sauce', 'mozzarella', 'ham', 'pineapple'],
    description: 'A tropical twist with ham and pineapple.',
  });

  renderPizzas();
}

setTimeout(addPizza, 2000);