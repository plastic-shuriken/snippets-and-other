class AsyncData {
  constructor(initialData) {
    this.data = initialData;
    this.subscribers = [];
  }

  // Подписываемся на изменения
  subscribe(callback)  {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    this.subscribers.push(callback);
  }

  async set(key, value) {
    this.data[key] = value;

    const updates = this.subscribers.map((async (callback) => {
      await callback(key, value)
    }));

    await Promise.allSettled(updates);
  }
}

const data = new AsyncData({pizza: 'Pepperoni'});

data.subscribe(async (key, value) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Update UI for ${key}: ${value} with 1s timeout`);
});

data.subscribe(async (key, value) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(`Update UI for ${key}: ${value} with 0.5s timeout`);
});

async function updateData() {
  await data.set('pizza', 'Supreme');
  console.log('All updates complete');
}

updateData();