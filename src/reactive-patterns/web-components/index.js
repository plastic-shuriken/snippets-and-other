class PizzaStoreComponent extends HTMLElement {
  static get observedAttributes() {
    return ['pizza-type'];
  }
  
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<p>${this.getAttribute('pizza-type') || 'Default content'}</p>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'pizza-type') {
      this.shadowRoot.querySelector('p').textContent = newValue;
      console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
  }
}

customElements.define('pizza-store', PizzaStoreComponent);

setTimeout(() => {
  document.querySelector('pizza-store').setAttribute('pizza-type', 'BBQ Chicken')
}, 7000);