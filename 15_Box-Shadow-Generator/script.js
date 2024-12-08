const box = document.querySelector(".box");
const x = document.querySelector(".offset-x");
const y = document.querySelector(".offset-y");
const radius = document.querySelector(".blur-radius");
const spread = document.querySelector(".blur-spread");
const color = document.querySelector(".color");
const cssValue = document.querySelector(".css-value");

function updateBox() {
  const output = `${x.value}px ${y.value}px ${radius.value}px ${spread.value}px ${color.value}`;
  cssValue.value = output;
  box.style.boxShadow = output;
}


[x, y, radius, spread, color].forEach(element => {
  element.addEventListener('input', updateBox);
});


updateBox();