const bgElements = () => {
  const elements = document.querySelectorAll(".set-bg");

  elements.forEach((elem) => {
    const src = elem.dataset.setbg;

    elem.style.backgroundImage = `url(${src})`;
  });
  /*for (let i = 0; i < elements.length; i++) {
    const src = elements[i].dataset.setbg;

    elements[i].style.backgroundImage = `url(${src})`;
  }*/
};

bgElements();
