
/** Объект, реализующий шаблон PubSub
 * 
 * в нем доступны 3 метода:
 * * subscribe - подписка на событие
 * * unsubscribe - отписка от события
 * * publish - выполнение действия с определенными данными по событию
 */
const  pubSub = {
  events: {},

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  },

  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  },

  publish(event, data) {
    this.events[event].forEach(cb => {
      cb(data);
    });
  },
}

/** Демонстрационный коллбэк */
const handleUpdate = (data) => {
  console.log('Data is: ', data);
}

/** Использование функционала PubSub */

const eventName = 'update';
const testData = 'some data';
pubSub.subscribe(eventName, handleUpdate);
pubSub.publish(eventName, testData);
pubSub.unsubscribe(eventName, handleUpdate);
pubSub.publish(eventName, testData);