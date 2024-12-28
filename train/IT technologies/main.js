const sphere = document.querySelector(".sphere");

const texts = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "React",
  "Redux Toolkit",
  "Node.js",
  "Next.js",
  "Vue.js",
  "Angular",
  "TypeScript",
  "Webpack",
  "Git",
  "Postman",
  "Vercel",
  "Render",
  "Swagger",
  "OpenAPI",
  "REST API",
  "Express",
  "MongoDB",
];

const radius = 150;
const totalTexts = texts.length;

texts.forEach((text, i) => {
  const phi = Math.acos(-1 + (2 * i) / totalTexts);
  const theta = (Math.PI * 2 * i) / totalTexts;
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  const span = document.createElement("span");
  span.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  span.textContent = text;
  sphere.appendChild(span);
});
