let showAnimation = 0;
let timer = 60;
let score = 0;
let hitrn = 0;
let startGameBox = document.querySelector(".startGame");
let startButton = document.querySelector("button");
let showGame = document.querySelector(".showGame");
startButton.addEventListener("click",()=>{
    document.querySelector(".start").play();
    document.querySelector(".panel").style.display = "block";
    startGameBox.style.display = "none";
    setTimeout(()=>{
       showGame.play();
    },500)
})
let increaseScore = ()=>{
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}
let decreaseScore = ()=>{
    score -= 10;
    document.querySelector("#scoreValue").textContent = score;
}
let getNewHit = () =>{
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = hitrn;
}

let makeBubble = ()=>{
    if(timer == 0){
            clearInterval(timerInt);
            document.querySelector(".showGame").pause();
            document.querySelector(".over").play();
            document.querySelector(".pbtm").innerHTML = `
            <div class="showOutput">
            <h1> Your Score is ${score} </h1>
            
            <h1>Game Over</h1>
            </div>
            `;
        }
    
    
    let clutter = "";

for(var i = 1; i<=168;i++){
    let randomNum = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNum}</div>`;
}

let pbtm = document.querySelector(".pbtm");
pbtm.innerHTML = clutter;

if(showAnimation == 0){
gsap.from(".pbtm",{
    opacity:0,
    y:100,
    x:100,
    duration:1
})
showAnimation = 1;
}
else if(showAnimation == 1){
    gsap.from(".pbtm",{
    opacity:0,
    y:-100,
    x:-100,
    duration:1
})
showAnimation = 0;
}

}

let runTimer = () =>{
    let timerInt = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".showGame").pause();
            document.querySelector(".over").play();  
            document.querySelector(".pbtm").innerHTML = `
            <div class="showOutput">
            <h1> Your Score is ${score} </h1>
            
            <h1>Game Over</h1>
            </div>
           `;
        }
    },1000);
}

document.querySelector(".pbtm").addEventListener("click",(deats)=>{
    document.querySelector(".start").play();
    let userClick = Number(deats.target.textContent);
    if(userClick == hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
         
    }
    else{
      getNewHit();
      makeBubble();
      decreaseScore();
    }
    
    
})




runTimer();
makeBubble();
getNewHit();