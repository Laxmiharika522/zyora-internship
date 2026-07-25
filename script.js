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


const quoteText = document.querySelector("#quoteText");
const quoteAuthor = document.querySelector("#quoteAuthor");
const newQuoteBtn = document.querySelector("#newQuoteBtn");

async function loadQuote() {

    // Loading State
    quoteText.textContent = "Loading...";
    quoteAuthor.textContent = "";

    try {

        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;

    } catch (error) {

        quoteText.textContent = "Couldn't fetch data.";
        quoteAuthor.textContent = "";

        console.error("Error:", error);

    }

}

// Load quote when page opens
loadQuote();

// Fetch another quote when button is clicked
newQuoteBtn.addEventListener("click", loadQuote);