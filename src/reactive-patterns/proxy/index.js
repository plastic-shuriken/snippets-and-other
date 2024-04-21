const handler = {
  get(target, property) {
    // property is 'name' and target is pizza
    console.log(`Getting property ${property}`);

    return target[property];
  },

  set(target, property, value) {
    console.log(`Setting value ${value} to property ${property}`);

    target[property] = value;
  }
}

const pizza = {
  name: "margarita",
  toppings: ["mozzarella", "tomato sauce"],
};
const proxiedPizza = new Proxy(pizza, handler);

console.log(proxiedPizza.name);

proxiedPizza.name = 'Pepperoni';