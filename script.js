// Button click event
document.getElementById("colorButton").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "red" ? "blue" : "red";
});

// Hover effect event
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});

document.getElementById("hoverDiv").addEventListener("mouseleave", function() {
    this.style.backgroundColor = "lightgray";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Email validation in real-time
document.getElementById("emailInput").addEventListener("input", function() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    this.style.borderColor = this.value.match(pattern) ? "green" : "red";
});

// Password validation in real-time
document.getElementById("passwordInput").addEventListener("input", function() {
    this.style.borderColor = this.value.length >= 8 ? "green" : "red";
});

// Form submission handling
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});
