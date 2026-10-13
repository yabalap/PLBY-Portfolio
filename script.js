document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const progress = document.getElementById("scroll-progress");

    function isDark() {
        return root.classList.contains("darkmode");
    }

    function syncThemeButton() {
        if (!themeToggle) return;
        const dark = isDark();
        themeToggle.setAttribute("aria-pressed", String(dark));
        themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }

    syncThemeButton();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const dark = !isDark();
            root.classList.toggle("darkmode", dark);
            localStorage.setItem("darkMode", dark ? "enabled" : "disabled");
            syncThemeButton();
        });
    }

    function setMenu(open) {
        if (!menuToggle || !navLinks) return;
        menuToggle.setAttribute("aria-expanded", String(open));
        navLinks.classList.toggle("is-open", open);
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
        });
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => setMenu(false));
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") setMenu(false);
        });
        document.addEventListener("click", (event) => {
            if (!navLinks.classList.contains("is-open")) return;
            if (event.target.closest(".site-nav") || event.target.closest(".menu-toggle")) return;
            setMenu(false);
        });
    }

    function updateProgress() {
        if (!progress) return;
        const scrollable = root.scrollHeight - window.innerHeight;
        const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = amount + "%";
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const sections = ["about", "experience", "projects", "contact"]
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    const navAnchors = [...document.querySelectorAll(".nav-links a")];

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navAnchors.forEach((anchor) => {
                    const current = anchor.getAttribute("href") === "#" + entry.target.id;
                    if (current) anchor.setAttribute("aria-current", "true");
                    else anchor.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-40% 0px -50% 0px" });
        sections.forEach((section) => observer.observe(section));
    }

    startTypewriter(document.querySelector(".typewriter-text"), ["AI PROMPT", "FULL STACK"]);
    startTypewriter(document.querySelector(".typewriter-about"), ["AI PROMPT", "FULL STACK"]);
});

function startTypewriter(element, phrases) {
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;

    function run() {
        window.clearTimeout(timer);
        if (motion.matches) {
            element.textContent = phrases[0];
            return;
        }

        let phraseIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function tick() {
            if (motion.matches) {
                element.textContent = phrases[0];
                return;
            }
            const phrase = phrases[phraseIndex];
            if (!deleting) {
                charIndex += 1;
                element.textContent = phrase.slice(0, charIndex);
                if (charIndex >= phrase.length) {
                    deleting = true;
                    timer = window.setTimeout(tick, 1600);
                    return;
                }
                timer = window.setTimeout(tick, 90);
                return;
            }
            charIndex -= 1;
            element.textContent = phrase.slice(0, Math.max(charIndex, 0));
            if (charIndex <= 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                timer = window.setTimeout(tick, 400);
                return;
            }
            timer = window.setTimeout(tick, 45);
        }

        tick();
    }

    run();
    motion.addEventListener("change", run);
}
