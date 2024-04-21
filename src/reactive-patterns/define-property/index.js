const pizza = {
  _name: 'Margherita',
}

Object.defineProperty(pizza, 'name', {
  get() {
    console.log('Getting property name');
    return this._name;
  },
  set(pizzaName) {
    console.log(`Setting property name: ${pizzaName}`);
    this._name = pizzaName;
  }
});

console.log(pizza.name);
pizza.name = 'Pepperoni';