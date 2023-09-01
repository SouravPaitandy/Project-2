// console.log("Working");
let level = 0;
let userSeq =[];
let gameSeq = [];
let highScore=[];

let color = ["red","green","yellow", "blue"];
let started = false;
let h2 = document.querySelector('h2');
let body = document.querySelector('body'); 

document.addEventListener("keypress",function(){
    //console.log("game started");
    if(started==false){
        console.log("started.");
        started = true;
        levelUP();
    }
});

function levelUP(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randClr = color[randomIdx];
    let randbtn = document.querySelector(`.${randClr}`);
    btnFlash(randbtn);
    gameSeq.push(randClr);
    console.log(gameSeq);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 150);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
   let btn = this;
   //console.log(btn);
   btnFlash(btn);
    userSeq.push(btn.getAttribute("id"));
    console.log(userSeq);
    cheeckAns(userSeq.length-1);
}

function cheeckAns(idx){
    if (userSeq [idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUP, 550);
         }
    }else{
        h2.innerHTML = `<b>Game Over,</b> <b>Your Score:</b> ${level}. Press any key to continue.`;
        highScore.push(level);
    let hS =Math.max(...highScore);
    let h3 = document.createElement('h3');
        body.appendChild(h3);
        h3.innerTexttext=`Highscore: ${highScore}`;
        bodyFlash();
        started = false;
        userSeq =[];
        gameSeq = []; 
        level = 0;
    }
}

function bodyFlash(){
    body.classList.add("bodyFlash");
    setTimeout(() => {
        body.classList.remove("bodyFlash");
    }, 150);
}


