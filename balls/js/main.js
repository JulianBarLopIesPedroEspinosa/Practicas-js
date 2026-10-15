const ball = document.getElementById("ball")

ball.style.top = (parseInt(screen.height / 2) - 50) +"px";
ball.style.left = "0px";

let interval = set(()=>{
    let izq = parseInt (ball.style.left.substring(0, ball.style.left.length-2));
    if(izq<(screen.width - 100)){
        ball.style.left = (izq + 10) + "px";
    }
}, 100);