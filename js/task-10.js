const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesDiv = document.getElementById('boxes');
  const inputNumber = document.querySelector('input');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = inputNumber.valueAsNumber;
    const boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = boxSize + i * 10;
      box.style.width = size + 'px';
      box.style.height = size + 'px';
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }