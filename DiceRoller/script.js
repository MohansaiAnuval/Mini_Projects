// Assuming the button element has an id of "button"
const button = document.getElementById("button");

button.onclick = function() {
  // Move the declaration of the button inside the click handler
  const input = document.getElementById("input").value;
  const result = document.getElementById("result");
  const image = document.getElementById("diceimages");
  const resultimage = [];
  const resultdice = [];

  for (let i = 0; i < input; i++) {
    const randomnumber = Math.floor(Math.random() * 6) + 1;
    resultdice.push(randomnumber);
    // Assuming the images are stored in a folder named "images" inside your project directory
    resultimage.push(`<img src="images\\${randomnumber}.png" alt="${randomnumber} Dice">`);
  }

  result.textContent = `Dices: ${resultdice.join(", ")}`;
  // Setting innerHTML to add images to the "diceimages" element
  image.innerHTML = resultimage.join(" ");
};
