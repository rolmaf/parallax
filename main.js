function parallax(event) {
    this.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed") * 0.001;


        let distanseX = (screen.width / 2 - event.clientX) * speed;
        let distanseY = (screen.width / 2 - event.clientY) * speed;

        layer.style.transform = `translate(${distanseX}px, ${distanseY}px)`;
    });
}; 

document.addEventListener("mousemove", parallax);