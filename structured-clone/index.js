const testObject = { firstName: "Alex" };

const original = {
  map: new Map([["firstName", "Alex"]]),
  set: new Set([1, 2, 3]),
  date: new Date(),
  array: [testObject],
  testObject,
};

original.circularRef = testObject;

// structuredClone доступен на node 17.0.0 и выше
const cloned = structuredClone(original);

// console.log("🚀 ~ file: index.js:14 ~ cloned:", cloned);
// console.log(cloned === original);

/**
 * Ограничения:
 *
 *  - возвращает исключение при клонировании DOM node
 *  - возвращает исключение при клонировании функции
 *  - не клонирует цепочку прототипов
 *  - не клонирует дескрипотры свойств, геттеры, сеттеры и т.д.
 */
