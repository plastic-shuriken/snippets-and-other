class PizzaStore extends EventTarget {
  constructor() {
    super();
  };

  addPizza(flavor) {
    this.dispatchEvent(
      new CustomEvent('pizzaAdded', {
        detail: {name: flavor,},
      })
    )
  }
}

const pizzas = new PizzaStore();

const handlePizzaEvent = (event) => {
  console.log('event is: ', event?.detail?.name) ;
}

pizzas.addEventListener('pizzaAdded', handlePizzaEvent);
pizzas.addPizza('Supreme');