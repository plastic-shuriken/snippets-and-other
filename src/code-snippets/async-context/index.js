let data;

// Оборачиваем асинхронный функционал в асинхронный контекст
!(async () => {
  const result = await fetch("https:google.com/mcdkncjs");
  data = await result.json();
});
