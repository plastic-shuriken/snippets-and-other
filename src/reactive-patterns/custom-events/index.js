const PIZZA_EVENT_NAME = 'pizzaDelivery';

const pizzaEvent = new CustomEvent(PIZZA_EVENT_NAME, {
  detail: {name: 'Supreme',},
});

const handlePizzaEvent = (event) => {
  alert(`event is: ${event?.detail?.name}`);
  console.log('event is: ', event?.detail?.name) ;
}


// Регистрируем слушатель нашего события "pizzaDelivery" 
window.addEventListener(PIZZA_EVENT_NAME, handlePizzaEvent);
// Отправляем событие "pizzaDelivery". Ожидаем срабатывание 
// коллбэк-функции handlePizzaEvent
window.dispatchEvent(pizzaEvent);

const pizzaStore = document.querySelector("#pizza-store");
const eventTriggerElement = document.querySelector("#custom-event-trigger");

const handleButtonClick = (_) => {
  pizzaStore.dispatchEvent(pizzaEvent);
}

pizzaStore.addEventListener(PIZZA_EVENT_NAME, handlePizzaEvent);

eventTriggerElement.addEventListener('click', handleButtonClick);