const imagePaths = [
    "arana.png",
    "calabaza.png",
    "dulce.png",
];

function createFallingElement() {
    const element = document.createElement("img");
    const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    element.src = randomImagePath;
    element.classList.add("falling-element");
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.getElementById("container").appendChild(element);

    element.addEventListener("animationend", () => {
        element.remove();
    });
}

setInterval(createFallingElement, 2000);