const percentage = 60;
const propertyName = "--percentage";

const barElement = document.querySelector(".bar");

setTimeout(() => {
  barElement.style.setProperty(propertyName, percentage);

  const barElementStyleValue =
    getComputedStyle(barElement).getPropertyValue(propertyName);
  console.log(
    "🚀 ~ file: index.js:9 ~ barElementStyleValue:",
    barElementStyleValue,
  );
}, 5000);
