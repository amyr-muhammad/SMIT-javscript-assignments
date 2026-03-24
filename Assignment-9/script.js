let popup;

// WHERE WE AT
function whereWeAt() {
  document.getElementById("output").innerText = window.location.href;
}

// GO TO GOOGLE
function goToGoogle() {
  window.location.href = "https://www.google.com";
}

// REPLACE URL (no back button)
function replaceURL() {
  window.location.replace("https://www.youtube.com");
}

// OPEN POPUP
function openPopup() {
  popup = window.open("", "", "width=400,height=300");
}

// FILL CONTENT IN POPUP
function fillPopup() {
  if (popup) {
    popup.document.write("<h2 style='text-align:center'>Hello from Popup 🚀</h2>");
  }
}

// ASSIGN URL TO POPUP
function assignURL() {
  if (popup) {
    popup.location.href = "https://www.google.com";
  }
}

// CLOSE POPUP
function closePopup() {
  if (popup) {
    popup.close();
  }
}

// CLEAR OUTPUT
function clearOutput() {
  document.getElementById("output").innerText = "";
}