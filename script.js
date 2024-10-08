document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("switch-btn");
    let body = document.body;
    let colors = ["red", "blue", "green", "yellow"];

    function setColor(){
        colorIndex = Math.floor(Math.random()*colors.length);
        body.style.backgroundColor = colors[colorIndex];
    }

    button.addEventListener('click', setColor);
});