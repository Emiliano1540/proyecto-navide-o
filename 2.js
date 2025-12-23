const lights = document.querySelectorAll(".light");
const tree = document.getElementById("tree");

/* Patrones de luces */
const lightPatterns = [
    ["red", "yellow"],
    ["blue", "cyan"],
    ["pink", "orange"],
    ["green", "gold"]
];

let patternIndex = 0;

/* Posicionar luces */
lights.forEach(light => {
    light.style.left = Math.random() * 80 - 40 + "px";
    light.style.top = Math.random() * 90 + "px";
});

/* Animación luces */
function animateLights() {
    lights.forEach((light, index) => {
        const colors = lightPatterns[patternIndex];
        const color = colors[index % colors.length];
        light.style.background = color;
        light.style.color = color;
    });
}

/* Cambiar patrón al hacer clic en el árbol */
tree.addEventListener("click", () => {
    patternIndex = (patternIndex + 1) % lightPatterns.length;
    animateLights();
});

/* Animación automática */
setInterval(animateLights, 800);

/* ❄️ Nieve */
const snowContainer = document.querySelector(".snow-container");

for (let i = 0; i < 80; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snow");

    const size = Math.random() * 6 + 3;
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 5 + 5 + "s";
    snow.style.opacity = Math.random();

    snowContainer.appendChild(snow);
}
