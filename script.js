function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // for the functionality of the hamburger menu belong to div class- menu links//

    const icon = document.querySelector(".hamburger-icon"); // for the functionality of the hamburger menu belong to div class- hamburger-icon//

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const texts1 = ["FRONT-END", "WEB"];
const texts2 = ["FRONT-END", "WEB"]; // New texts for .typewriter-about

let speed = 200;
const textElement = document.querySelector(".typewriter-text");
const textElement1 = document.querySelector(".typewriter-about");

let textIndex1 = 0, charIndex1 = 0;
let textIndex2 = 0, charIndex2 = 0;

function typeWriter1() {
    if (charIndex1 < texts1[textIndex1].length) {
        textElement.innerHTML += texts1[textIndex1].charAt(charIndex1);
        charIndex1++;
        setTimeout(typeWriter1, speed);
    } else {
        setTimeout(eraseText1, 2000);
    }
}

function eraseText1() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText1, 50);
    } else {
        textIndex1 = (textIndex1 + 1) % texts1.length;
        charIndex1 = 0;
        setTimeout(typeWriter1, 500);
    }
}

function typeWriter2() {
    if (charIndex2 < texts2[textIndex2].length) {
        textElement1.innerHTML += texts2[textIndex2].charAt(charIndex2);
        charIndex2++;
        setTimeout(typeWriter2, speed);
    } else {
        setTimeout(eraseText2, 2000);
    }
}

function eraseText2() {
    if (textElement1.innerHTML.length > 0) {
        textElement1.innerHTML = textElement1.innerHTML.slice(0, -1);
        setTimeout(eraseText2, 50);
    } else {
        textIndex2 = (textIndex2 + 1) % texts2.length;
        charIndex2 = 0;
        setTimeout(typeWriter2, 500);
    }
}

// Start both typewriter effects
typeWriter1();
typeWriter2();
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const desktopToggle = document.getElementById("dark-mode-toggle");
    const desktopIcon = document.getElementById("dark-mode-icon");
    const mobileToggle = document.getElementById("dark-mode-toggle-mobile");
    const mobileIcon = document.getElementById("dark-mode-icon-mobile");

    // Image paths
    const moonIcon = "./assets/dark-mode.png"; // Dark mode icon
    const sunIcon = "./assets/light-mode.png"; // Light mode icon

    // Apply stored theme preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("darkmode");
        desktopIcon.src = sunIcon;
        mobileIcon.src = sunIcon;
    } else {
        body.classList.remove("darkmode");
        desktopIcon.src = moonIcon;
        mobileIcon.src = moonIcon;
    }

    // Update images based on theme
    updateThemeImages();

    // Toggle function for both buttons
    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle("darkmode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        desktopIcon.src = isDarkMode ? sunIcon : moonIcon;
        mobileIcon.src = isDarkMode ? sunIcon : moonIcon;
        updateThemeImages();
    }

    desktopToggle.addEventListener("click", toggleDarkMode);
    mobileToggle.addEventListener("click", toggleDarkMode);

    /**
     * Updates all images with the correct theme version.
     */
    function updateThemeImages() {
        document.querySelectorAll("[data-light][data-dark]").forEach(img => {
            const isDarkMode = document.body.classList.contains("darkmode");
            img.src = isDarkMode ? img.dataset.dark : img.dataset.light;
        });
    }

    // Apply styles for mobile nav same as desktop nav
    const style = document.createElement("style");
    style.innerHTML = `
        #dark-mode-toggle-mobile {
            position: relative;
            top: 20px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
        }
        
        #dark-mode-icon-mobile {
            width: 50px;
            height: 50px;
            transition: transform 0.2s ease, opacity 0.3s ease;
        }
        
        #dark-mode-toggle-mobile:hover #dark-mode-icon-mobile {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);
});



document.addEventListener("DOMContentLoaded", function () {
    const numFlakes = 50; // Number of snowflakes
    for (let i = 0; i < numFlakes; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❆"; // Snowflake character
        document.body.appendChild(snowflake);

        let size = Math.random() * 10 + 5; // Random size
        let left = Math.random() * window.innerWidth; // Random horizontal position
        let duration = Math.random() * 5 + 5; // Random fall duration
        let delay = Math.random() * 5; // Random delay

        snowflake.style.left = left + "px";
        snowflake.style.fontSize = size + "px";
        snowflake.style.animationDuration = duration + "s";
        snowflake.style.animationDelay = delay + "s";
    }
});


AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: false, // Keep animating when scrolling back
    mirror: false, // Disable animation when scrolling back up
    offset: 100, // Adjusts when animation triggers
  });

