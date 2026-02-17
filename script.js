// Scroll Reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.8;

        if (sectionTop < trigger) {
            section.classList.add("show");
        }
    });

    // Progress bar logic
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.querySelector(".progress-bar").style.width = progress + "%";
});

// Typing Animation
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

// Mouse Glow
document.addEventListener("mousemove", e => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 500);
});
const floatingLottie = document.querySelector('.floating-lottie');

// Optional: make it sway with mouse
document.addEventListener('mousemove', e => {
    if (!floatingLottie) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    floatingLottie.style.transform = `translate(${x}px, ${y}px)`;
});
function scrollToSection(id) {
    document.querySelector("." + id).scrollIntoView({
        behavior: "smooth"
    });
}
