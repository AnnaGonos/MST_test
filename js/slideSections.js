document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".advantages, .order");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("advantages")) {
                    entry.target.classList.add("slide-up");
                } else if (entry.target.classList.contains("order")) {
                    entry.target.classList.add("slide-left");
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});
