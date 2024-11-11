let userscore = 0;
let compscore = 0;
const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const gencompchoise = ()=>{ //function a
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
}


const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game Draw!Play again ";
    msg.style.backgroundColor ="";
}

 
const showWinner = (userWin, userchoise, compchoise)=>{
if(userWin){
   userscore ++;
   userScorepara.innerText = userscore;
    msg.innerText = `You Win! Your ${userchoise} beats ${compchoise}`;
    msg.style.backgroundColor ="green";
}
else{
    compscore ++; 
    compScorepara.innerText = compscore;
    msg.innerText = `You Lost ! ${compchoise} beats ${userchoise}`;
    msg.style.backgroundColor ="red";
}
}


const playgame = (userchoise) =>{
    console.log("user choise", userchoise);
    const compchoise = gencompchoise(); // function calling a
    console.log("comp choise ", compchoise);
    if(userchoise === compchoise){
        drawGame();
    }
    else{
      let userWin = true;
      if(userchoise === "rock"){
        // paper scissor
        userWin = compchoise === "paper" ? false : true;
        }
        else if(userchoise === "paper"){
            //rock scissor
            userWin = compchoise === "scissor" ? false : true;
        }
        else{
            // rock paper
            userWin = compchoise === "rock" ? false : true;
        }
        showWinner(userWin ,userchoise, compchoise );
    }
}


choises.forEach((choise)=>{
   choise.addEventListener("click",()=>{
    const userchoise = choise.getAttribute("id"); 
//    console.log("choise was clicked", userchoise);
   playgame(userchoise);
   });
});
    
