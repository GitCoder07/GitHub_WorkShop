const button = document.getElementById("actionButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "🎉 Git is working! Now let's push this project to GitHub.";
});