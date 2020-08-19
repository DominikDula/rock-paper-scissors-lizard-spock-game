"use strict"

function showRules(){

    let ruleBtn = document.querySelector(".rule-btn");
    let showRules = document.querySelector(".show-rules");
    let cancel = document.querySelector(".cancel");
    let main = document.querySelector("#main");

    ruleBtn.addEventListener("click",() =>{
        showRules.style=`display:flex`;
        main.style=`opacity:0.5;background:black;`;
    });

    cancel.addEventListener("click",() =>{
        showRules.style =`display:none`;
        main.style=`opacity:1;background:none;`;
    });

}

showRules();


let game =document.querySelector(".game");
let gameStart =document.querySelector(".game-start");
let randomClass = ['rock','paper','scissors'];
let addRandom = Math.floor(Math.random() * randomClass.length);
let showScore = document.querySelector(".show-score");
let increaseScore=0;



game.addEventListener("click",function(e){
    
    let whoWins = "";

    function showYouPick(){
        let youPick = document.querySelector(".you-pick");
        youPick.style =`opacity:1; transform: rotate(360deg);`
    }
    function showHousePick(){
        let housePick = document.querySelector(".house-pick");
        housePick.style =`opacity:1; transform: rotate(360deg);`
    }
    function showWhoWon(){
        let result = document.querySelector(".result");
        let youPickAfter = document.querySelector(".you-pick");
        let housePickAfter = document.querySelector(".house-pick");
        housePickAfter.style =`opacity:1; transform: translateX(60px);`
        youPickAfter.style =`opacity:1; transform: translateX(-60px);`
        result.style =`opacity:1;transform: translate(-50%, -50%) scale(1)`
    }
    

    if(e.target.classList.contains('paper')){

        setTimeout(showYouPick,0);
        setTimeout(showHousePick,1000);
        setTimeout(showWhoWon,2000);

        if(randomClass[addRandom]==="rock"){
            whoWins="YOU WIN";
            function addWinPaperAnimation(){
                let paperYouWin = document.querySelector(".you-pick");
                paperYouWin.style =`opacity:1;transform: translateX(-60px);animation: pulse-animation 1.5s infinite;`;
                increaseScore++;
                showScore.innerHTML = increaseScore;
            }
            setTimeout(addWinPaperAnimation,3000);

        }else if(randomClass[addRandom]==="scissors"){
            whoWins="YOU LOSE"
            function addLosePaperAnimation(){
                let paperYouLose = document.querySelector(".house-pick");
                paperYouLose.style =`opacity:1;transform: translateX(60px);animation: pulse-animation 1.5s infinite;`;
                increaseScore--;
                showScore.innerHTML = increaseScore;
            }
            setTimeout(addLosePaperAnimation,3000);
        }else (whoWins="DRAW");


        gameStart.innerHTML=`
        <h2>YOU PICKED</h2>
            <h2>THE HOUSE PICKED</h2>
            
            <div class="result">
                <h1>${whoWins}</h1>
                <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="paper-game you-pick">
                <div class="paper-img-game">
                    <img src="./images/icon-paper.svg" alt="paper-icon">
                </div>              
            </div>
            <div class="${randomClass[addRandom]}-game house-pick">
                <div class="${randomClass[addRandom]}-img-game">
                    <img src="./images/icon-${randomClass[addRandom]}.svg" alt="${randomClass[addRandom]}-icon">
                </div>   
            </div>
        `
        game.style=`display:none;`
        gameStart.style=`display:flex;`
    }
    if(e.target.classList.contains('rock')){

        setTimeout(showYouPick,0);
        setTimeout(showHousePick,1000);
        setTimeout(showWhoWon,2000);


        if(randomClass[addRandom]==="scissors"){
            whoWins="YOU WIN";
            function addWinRockAnimation(){
                let rockYouWin = document.querySelector(".you-pick");
                rockYouWin.style =`opacity:1;transform: translateX(-60px);animation: pulse-animation 1.5s infinite;`;
                increaseScore++;
                showScore.innerHTML = increaseScore;
            }
            setTimeout(addWinRockAnimation,3000);
        }else if(randomClass[addRandom]==="paper"){
            whoWins="YOU LOSE";
            function addLoseRockAnimation(){
                let rockYouLose = document.querySelector(".house-pick");
                rockYouLose.style =`opacity:1;transform: translateX(60px);animation: pulse-animation 1.5s infinite;`;
                increaseScore--;
                showScore.innerHTML = increaseScore;
            }
            setTimeout(addLoseRockAnimation,3000);

        }else(whoWins="DRAW")
            
        ;

        gameStart.innerHTML=`
        <h2>YOU PICKED</h2>
            <h2>THE HOUSE PICKED</h2>
            
            <div class="result">
                <h1>${whoWins}</h1>
                <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="rock-game you-pick">
                <div class="rock-img-game">
                    <img src="./images/icon-rock.svg" alt="rock-icon">
                </div>              
            </div>
            <div class="${randomClass[addRandom]}-game house-pick">
                <div class="${randomClass[addRandom]}-img-game">
                    <img src="./images/icon-${randomClass[addRandom]}.svg" alt="${randomClass[addRandom]}-icon">
                </div>   
            </div>
        `;
        game.style=`display:none;`;
        gameStart.style=`display:flex;`;

    }
    if(e.target.classList.contains('scissors')){

        setTimeout(showYouPick,0);
        setTimeout(showHousePick,1000);
        setTimeout(showWhoWon,2000);


        if(randomClass[addRandom]==="paper"){
            whoWins="YOU WIN";
            function addWinScissorsAnimation(){
                let scissorsYouWin = document.querySelector(".you-pick");
                scissorsYouWin.style =`opacity:1;transform: translateX(-60px);animation: pulse-animation 1.5s infinite;`;
                increaseScore++;
                showScore.innerHTML = increaseScore;
            }
            setTimeout(addWinScissorsAnimation,3000);
        }else if(randomClass[addRandom]==="rock"){
            whoWins="YOU LOSE";
            function addLoseScissorsAnimation(){
                let scissorsYouLose = document.querySelector(".house-pick");
                scissorsYouLose.style =`opacity:1;transform: translateX(60px);animation: pulse-animation 1.5s infinite;`;
                increaseScore--;
                showScore.innerHTML = increaseScore;
            }
            setTimeout(addLoseScissorsAnimation,3000);
        }else(whoWins="DRAW");

        gameStart.innerHTML=`
        <h2>YOU PICKED</h2>
            <h2>THE HOUSE PICKED</h2>
            
            <div class="result">
                <h1>${whoWins}</h1>
                <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="scissors-game you-pick">
                <div class="scissors-img-game">
                    <img src="./images/icon-scissors.svg" alt="scissors-icon">
                </div>              
            </div>
            <div class="${randomClass[addRandom]}-game house-pick">
                <div class="${randomClass[addRandom]}-img-game">
                    <img src="./images/icon-${randomClass[addRandom]}.svg" alt="${randomClass[addRandom]}-icon">
                </div>   
            </div>
        `;
        game.style=`display:none;`;
        gameStart.style=`display:flex;`;
    }
    function playAgain(){
        addRandom = Math.floor(Math.random() * randomClass.length);
        let play = document.querySelector("#play-again");

        play.addEventListener("click",()=>{
            game.style=`display:flex;`;
            gameStart.style=`display:none;`;
        })



    };

    playAgain();

    
})


