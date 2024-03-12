const option = document.getElementById("mySelect");
option.addEventListener("change", changeSelect);

function changeSelect(event) {
    new SlimSelect({
        select: "#mySelect",
      });
}



