// Логика рендеринга описывается тут
const drawStuff = () => {
  console.log('👩‍🎓 drawStuff works');
}

// Функция обработки анимации
const animate = () => {
  drawStuff();
  // Продолжаем вызывать анимацию на каждом кадре рендеринга
  requestAnimationFrame(animate)
}

// Запускаем анимацию
animate(); 