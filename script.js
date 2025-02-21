function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // for the functionality of the hamburger menu belong to div class- menu links//

    const icon = document.querySelector(".hamburger-icon"); // for the functionality of the hamburger menu belong to div class- hamburger-icon//

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

const texts = [
    "FRONT-END DEVELOPER",
    "WEB DEVELOPER",
    "JLPT N4"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
