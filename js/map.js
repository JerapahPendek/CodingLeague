function toggleUserPopup() {
  var popup = document.getElementById("userActionPopup");
  if (popup.style.display === "block") {
      popup.style.display = "none";
  } else {
      popup.style.display = "block";
  }
}