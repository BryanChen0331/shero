const bg = document.querySelector("#bg");
const startBtn = document.querySelector("#start-btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

function start(){
    bg.src = "./src/img/q2-bg.png";
    startBtn.style.display = "none";
    btn1.style.display = "block";
    btn2.style.display = "block";
}

startBtn.addEventListener("click", start);