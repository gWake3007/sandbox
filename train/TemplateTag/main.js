//?Тег <template> використовується для створення шаблонів HTML, які можна згодом використовувати в документі, але які за замовчуванням не відображаються на сторінці.

const container = document.getElementById("container");
const templateNode = document.getElementById("text-template");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday",
  "Saturday",
];

days.forEach((day) => {
  const template = document.importNode(templateNode.content, true);
  const text = template.querySelector(".text");
  text.textContent = day;

  container.append(text);
});
