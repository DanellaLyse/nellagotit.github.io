// ===== Scroll Reveal & Progress Bar =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.8;
        if (sectionTop < trigger) section.classList.add("show");
    });

    // Progress bar
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.querySelector(".progress-bar").style.width = progress + "%";
});

// ===== Typing Animation =====
const text = "Initializing DanellaOS... Access Granted.";
let index = 0;
function type() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}
window.onload = type;

// ===== Mouse Glow =====
document.addEventListener("mousemove", e => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
    document.body.appendChild(glow);
    setTimeout(() => { glow.remove(); }, 500);
});

// ===== Floating Lottie Mouse Sway =====
window.addEventListener("DOMContentLoaded", () => {
    const floatingInner = document.querySelector(".floating-lottie-inner");
    if (!floatingInner) return;

    document.addEventListener("mousemove", e => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        floatingInner.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== Smooth Scroll Function =====
function scrollToSection(id) {
    document.querySelector("." + id).scrollIntoView({
        behavior: "smooth"
    });
}

