const colorFunc = () => {
  let colorPick = false;
  document.querySelectorAll("#game-chip").forEach((item) => {
    const colorPicker = () => {
      item.addEventListener("click", (event) => {
        if (!colorPick) {
          event.target.style.backgroundColor = "red";
          colorPick = true;
          console.log(colorPick);
        } else {
          event.target.style.backgroundColor = "yellow";
          colorPick = false;
          console.log(colorPick);
        }
      });
    };
    colorPicker();
  });
};
colorFunc();

const resetThePage = () => {
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.querySelectorAll("#game-chip").forEach((item) => {
      item.style.backgroundColor = "white";
    });
  });
};

resetThePage();
