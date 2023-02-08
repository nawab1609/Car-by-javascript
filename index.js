x = 0;
start.onclick = () => {
  if (x == 0) {
    for (a = 0; a <= 880; a++) {
      pic.style.transition = "3s";
      pic.style.marginLeft = a + "px";
    }
    x = 1;
    y = 0;
  } else {
    for (a = 880; a >= 0; a--) {
      pic.style.transition = "3s";
      pic.style.marginLeft = a + "px";
    }
    x = 0;
    y = 1;
  }
};

reverse.onclick = () => {
  if (y == 0) {
    pic.style.transform = "scaleX(-1)";
  }
  if (y == 1) {
    pic.style.transform = "scaleX(1)";
  }
};
