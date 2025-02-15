// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Greeting based on the time of day
function setGreeting() {
    const hours = new Date().getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Display greeting in a DOM element with the ID 'greeting'
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = `${greeting}, welcome to my portfolio!`;
    }
}

// Run the setGreeting function when the page loads
window.onload = setG
