// Efecto de aparición al hacer scroll
let isScrolling = false;

document.addEventListener("scroll", () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            const elements = document.querySelectorAll(".fade-in");
            const scrollY = window.scrollY + window.innerHeight;

            elements.forEach((element) => {
                if (scrollY > element.offsetTop + element.clientHeight / 2) {
                    element.classList.add("visible");
                }
            });
            isScrolling = false;
        });
    }
});

// Efecto para resaltar enlace activo en la barra de navegación
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll("nav a").forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
    });
});

// Persistir el estado activo al cargar la página
const currentPath = window.location.pathname;
const activeLink = [...document.querySelectorAll("nav a")].find(link => link.href.includes(currentPath));
if (activeLink) {
    activeLink.classList.add("active");
}

// Efecto de hover para ampliar la imagen
const imageContainer = document.querySelector(".image-container img");
imageContainer.addEventListener("mouseenter", () => {
    imageContainer.classList.add("zoom");
});
imageContainer.addEventListener("mouseleave", () => {
    imageContainer.classList.remove("zoom");
});

