class Subject {
  constructor () {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(observerItem =>  observerItem !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(observerName) {
    this.name = observerName;
  }

  update(data) {
    console.log(`Observer ${this.name} got data: ${data}`);
  }
}

const subject = new Subject();
const observerA = new Observer('observerA');
const observerB = new Observer('observerB');

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.notify('e5a7c76a557');

subject.removeObserver(observerA);

subject.notify('6386763');
