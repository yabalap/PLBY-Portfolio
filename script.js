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



