let elem = document.getElementById("game-chip");
let elem2 = document.getElementById("game-chip1");
const colorFunc = (event) => {
  document.querySelectorAll("#game-chip").forEach((item) => {
    item.addEventListener("click", (event) => {
      let colorPick = false;
      if (!colorPick) {
        event.target.style.backgroundColor = "red";
        event.target.value = colorPick = true;
      } else {
        event.target.style.backgroundColor = "yellow";
        colorPick = false;
      }
    });
    item.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.target.style.backgroundColor = "yellow";
    });
  });
};

const reset = (e) => {
  document.querySelectorAll("#game-chip", (e) => {
    document.addEventListener("click", (e) => {
      e.target.style.backgroundColor = "white";
    });
  });
};
