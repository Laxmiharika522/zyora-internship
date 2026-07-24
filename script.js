const themeButton = document.querySelector("#themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

    console.log("Theme Changed");
});

const form = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    console.log("Form Submitted");

    // Remove extra spaces
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Clear previous message
    formMessage.textContent = "";

    // Name Validation
    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "#dc2626";
        nameInput.focus();
        return;
    }

    // Email Validation
    if (email === "") {
        formMessage.textContent = "Please enter your email address.";
        formMessage.style.color = "#dc2626";
        emailInput.focus();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#dc2626";
        emailInput.focus();
        return;
    }

    // Message Validation
    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        formMessage.style.color = "#dc2626";
        messageInput.focus();
        return;
    }

    // Minimum message length
    if (message.length < 10) {
        formMessage.textContent = "Message should contain at least 10 characters.";
        formMessage.style.color = "#dc2626";
        messageInput.focus();
        return;
    }

    // Success
    formMessage.textContent = "✅ Your message has been successfully submitted.";
    formMessage.style.color = "#16a34a";

    console.log("Validation Successful");

    form.reset();
});


