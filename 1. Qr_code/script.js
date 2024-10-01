const qrInput = document.getElementById('input-box');
const qrImg = document.getElementById('qr-img');
const qrButton = document.getElementById('qr-button');

console.log(qrImg, qrButton, qrInput);

// Add event listener for both button click and Enter key press
qrButton.addEventListener('click', handleQrGeneration);
qrInput.addEventListener('keypress', handleQrGeneration);

function handleQrGeneration(event) {
  // Check for Enter key press or button click
  if (event.type === 'keypress' && event.key !== 'Enter') {
    return; // Ignore non-Enter key presses
  }

  const inputValue = qrInput.value;

  console.log(inputValue);

  if (!inputValue) {
    alert("Please enter a valid URL");
    return;
  } else {
    // Corrected URL with escaped ampersand
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    qrImg.alt = `QR code for ${inputValue}`;
  }
}