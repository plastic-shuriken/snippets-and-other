const element = document.getElementById("animated-element");

const animation = element?.animate(
  [
    // Ключевые кадры (keyframes)
    {
      transform: 'scale(1)',
      backgroundColor: 'blue',
      left: '50px',
      top: '50px',
    },
    {
      transform: 'scale(1.5)',
      backgroundColor: 'red',
      left: '200px',
      top: '200px',
    },
  ],
  {
    // Настройки времени
    // Продолжительность
    duration: 1000,
    // Направление
    fill: 'forwards',
  },
) ?? {};

// Устанавливаем скорость воспроизведения в значение `0`
// для приостановки анимации
animation.playbackRate = 0

// Регистрируем обработчик клика
element.addEventListener('click', () => {
  console.log('🥪');
  // Если анимация приостановлена, возобновляем ее
  if (animation.playbackRate === 0) {
    console.log('🍖');
    animation.playbackRate = 1;
  } else {
    console.log('🌮');
    // Если анимация воспроизводится, меняем ее направление
    animation.reverse();
  }
})