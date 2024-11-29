// Toolbar buttons and advanced options
let optionsButtons = document.querySelectorAll(".tool--btn");
let advancedOptionButtons = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("output");

// Font list
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive",
];

// Initialize the editor
const initializer = () => {
  // Populate font list dropdown
  fontList.forEach((font) => {
    let option = document.createElement("option");
    option.value = font;
    option.textContent = font;
    fontName.appendChild(option);
  });

  // Populate font size dropdown
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    fontSizeRef.appendChild(option);
  }

  // Set default font size
  fontSizeRef.value = 3;

  // Set initial contenteditable focus
  writingArea.focus();
};

// Modify text based on toolbar commands
const modifyText = (command, value = null) => {
  document.execCommand(command, false, value);
  writingArea.focus(); // Keep focus on the editor
};

// Add event listeners to toolbar buttons
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.dataset.command;

    if (command === "createlink") {
      let url = prompt("Enter the link URL:", "http://");
      if (url) {
        if (!/^https?:\/\//i.test(url)) {
          url = "http://" + url; // Ensure valid URL
        }
        modifyText("createLink", url);
      }
    } else {
      modifyText(command);
    }
  });
});

// Add event listeners to dropdowns
advancedOptionButtons.forEach((dropdown) => {
  dropdown.addEventListener("change", (event) => {
    const command = dropdown.id === "fontName" ? "fontName" : "fontSize";
    modifyText(command, event.target.value);
  });
});

// Initialize on page load
window.onload = initializer;
    