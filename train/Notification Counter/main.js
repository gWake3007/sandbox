const btnNotification = document.querySelector(".notificationBtn");

function clickerDataCount() {
  let count = parseInt(btnNotification.getAttribute("data-count"));
  count += 1;
  btnNotification.setAttribute("data-count", count);
}

btnNotification.addEventListener("click", clickerDataCount);
