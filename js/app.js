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

        compareWho('paper','rock','scissors');
        compareWho('scissors','paper','rock');
        compareWho('rock','scissors','paper');

        let youPick = document.querySelector(".you-pick");
        let housePick = document.querySelector(".house-pick");
    function showYouPick(){
        youPick.style =`opacity:1; transform: rotate(360deg);`
    }
    function showHousePick(){
        housePick.style =`opacity:1; transform: rotate(-360deg);`
    }
    function showWhoWon(){
        let result = document.querySelector(".result");
        let headingYouPick = document.querySelector(".heading-you-pick");
        let headingHousePick = document.querySelector(".heading-house-pick");
        housePick.style =`opacity:1; transform: translateX(150px);`;
        youPick.style =`opacity:1; transform: translateX(-150px);`;
        result.style =`opacity:1;transform: translate(-50%, -50%) scale(1)`;
        headingYouPick.style =`transform: translateX(-150px);`;
        headingHousePick.style =`transform: translateX(150px);`;
        if(window.innerWidth < 800){
            headingYouPick.style =`transform: translateX(0px);`;
            headingHousePick.style =`transform: translateX(0px);`;
            youPick.style =` opacity:1;transform: translateX(0xp);`;
            housePick.style =`opacity:1;transform: translateX(0px);`;

        }
    }

    function playAgain(){
        addRandom = Math.floor(Math.random() * randomClass.length);
        let play = document.querySelector("#play-again");
        play.style =`animation: pulse-text 1.5s infinite;`;

        play.addEventListener("click",()=>{
            game.style=`display:flex;`;
            gameStart.style=`display:none;`;
        })


    };
    setTimeout(playAgain,3000);
    
    function compareWho(a,b,c){
        let whoWins = "";
        if(e.target.classList.contains(`${a}`)){
    
            setTimeout(showYouPick,0);
            setTimeout(showHousePick,1000);
            setTimeout(showWhoWon,2000);
    
    
            if(randomClass[addRandom]===`${b}`){
                whoWins="YOU WIN";
                function addWinAnimation(){
                    youPick.style =`opacity:1;transform: translateX(-150px);animation: pulse-animation 1.5s infinite;`;
                    increaseScore++;
                    showScore.innerHTML = increaseScore;
                    if(window.innerWidth < 800){
                        youPick.style =` transform: translateX(0xp);opacity:1;animation:pulse-animation 1.5s infinite;`;
                    }
                }
                setTimeout(addWinAnimation,3000);
            }else if(randomClass[addRandom]===`${c}`){
                whoWins="YOU LOSE";
                function addLoseAnimation(){
                    housePick.style =`opacity:1;transform: translateX(150px);animation: pulse-animation 1.5s infinite;`;
                    increaseScore--;
                    showScore.innerHTML = increaseScore;
                    if(window.innerWidth < 800){
                        housePick.style =` transform: translateX(0xp);opacity:1;animation:pulse-animation 1.5s infinite;`;
                    }
                }
                setTimeout(addLoseAnimation,3000);
            }else(whoWins="DRAW");
    
            gameStart.innerHTML=`
            <h2 class="heading-you-pick">YOU PICKED</h2>
            <h2 class="heading-house-pick">THE HOUSE PICKED</h2>
                
                <div class="result">
                    <h1>${whoWins}</h1>
                    <button id="play-again">PLAY AGAIN</button>
                </div>
                <div class="${a}-game you-pick">
                    <div class="${a}-img-game">
                        <img src="./images/icon-${a}.svg" alt="${a}-icon">
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
    
    
    }

    
})

