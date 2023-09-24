const mutationCallback = (mutationsList)  => {
  for (const mutation of mutationsList) {
    if (
      mutation.type !== 'attributes' ||
      mutation.attributeName !== 'pizza-type'
    ) {
      return;
    }

    console.log('New: ', mutation.target.getAttribute('pizza-type'));
  }
};

const observer = new MutationObserver(mutationCallback);

const pizzaStore = document.getElementById('pizza-store');

observer.observe(pizzaStore, {
  attributes: true,
});

setTimeout(() => {
  pizzaStore.setAttribute('pizza-type', 't2');
}, 4000);
