const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.8;

        if (sectionTop < trigger) {
            section.classList.add("show");
        }
    });
});
