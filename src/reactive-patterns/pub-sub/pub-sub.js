const scriptInfoData = `
  Шаблон pubSub предоставляет 3 метода:
    - subscribe(event, callback) - подписка на событие
    - unsubscribe(event, callback) - отписка от события
    - publish(event, data) - выполнение действия с определенными данными по событию

  В демонстрационных целях реализована функция handleUpdate, которая 
  принимает произвольные данные и отображает их с помощью вызова 
  console.log(data).

  В этом примере сначала происходит подписка на событие 'update' с коллбэком
  handleUpdate.
  Потом вызываем publish с событием 'update' и данными в виде строки 'some data'.
  Результат в консоли: Data is:  some data
  Далее отписываемся от события 'update' с коллбэком handleUpdate.
  После чего пытаемся повторно вызвать publish с событием 'update' и данными 
  в виде строки 'some data'. Ничего не происходит, так как мы уже отписались.
`;
console.log(scriptInfoData);
console.log('===========================================================');


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