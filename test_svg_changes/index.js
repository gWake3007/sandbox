//!================================== First Example (Work for svg element(path)) ========================================
//?Заміна властивостей fill на кожному із елементів path окремо.Самі svg знаходяться в html документі.
// const svg = document.querySelector("#svg");

// const allPath = {
//   path1: document.getElementById("path1"),
//   path2: document.getElementById("path2"),
//   path3: document.getElementById("path3"),
//   path4: document.getElementById("path4"),
//   path5: document.getElementById("path5"),
// };

// svg.addEventListener("mouseover", hoverSvg);

// function hoverSvg() {
//   requestAnimationFrame(
//     (allPath.path5.style.fill = "blue"),
//     (allPath.path1.style.fill = "red"),
//     (allPath.path2.style.fill = "grey"),
//     (allPath.path3.style.fill = "yellow"),
//     (allPath.path4.style.fill = "orange")
//   );
// }

// svg.addEventListener("mouseout", hoverOutSvg);

// function hoverOutSvg() {
//   allPath.path1.style.fill = "black";
//   allPath.path2.style.fill = "black";
//   allPath.path3.style.fill = "black";
//   allPath.path4.style.fill = "black";
//   allPath.path5.style.fill = "black";
// }
//!========================================= Second Example ( )
//?
const svgFirst = document.querySelector(".svg-first");

async function fetchSvg() {
  return await fetch("./icons/antenna 1.svg")
    .then((resp) => resp.text())
    .then((resp) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(resp, "text/xml");
      const svgPath1 = xmlDoc.getElementById("path-first");
      const svgPath2 = xmlDoc.getElementById("path-second");
      console.log(svgPath1);
      console.log(svgPath2);
      svgFirst.addEventListener("mouseover", () => {
        svgPath1.setAttribute("fill", "#2E2F42");
        svgPath2.setAttribute("fill", "#4D5AE5");
      });
    });
}

fetchSvg();