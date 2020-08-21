"use strict"

function showRules(){

    let ruleBtn = document.querySelector(".rule-btn");
    let showRules = document.querySelector(".show-rules");
    let cancel = document.querySelector(".cancel");
    let main = document.querySelector("#main");
    let content = document.querySelector(".content");

    ruleBtn.addEventListener("click",() =>{
        if(window.innerWidth < 600){
            content.style=`display:none`;
        }
        showRules.style=`display:flex`;
        main.style=`opacity:0.5;background:black;`;
    });

    cancel.addEventListener("click",() =>{
        showRules.style =`display:none`;
        main.style=`opacity:1;background:none;`;
        content.style=`display:block`;
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
        let result = document.querySelector(".result");
        let headingYouPick = document.querySelector(".heading-you-pick");
        let headingHousePick = document.querySelector(".heading-house-pick");
    function showYouPick(){
        youPick.style =`opacity:1; transform: rotate(360deg);`
    }
    function showHousePick(){
        housePick.style =`opacity:1; transform: rotate(-360deg);`
    }
    function showWhoWon(){
        housePick.style =`opacity:1; transform: translateX(150px);`;
        youPick.style =`opacity:1; transform: translateX(-150px);`;
        result.style =`opacity:1;transform: translate(-50%, -50%) scale(1)`;
        headingYouPick.style =`transform: translateX(-150px);`;
        headingHousePick.style =`transform: translateX(150px);`;
        if(window.innerWidth < 800){
            youPick.style.removeProperty('transform');
            housePick.style.removeProperty('transform');
            headingYouPick.style.removeProperty('transform');
            headingHousePick.style.removeProperty('transform');
            youPick.style =` opacity:1;transform:  translateX(0px);`;
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
    
    function compareWho(classClicked,winner,loser){
        let whoWins = "";
        if(e.target.classList.contains(`${classClicked}`)){
    
            setTimeout(showYouPick,0);
            setTimeout(showHousePick,1000);
            setTimeout(showWhoWon,2000);
    
    
            if(randomClass[addRandom]===`${winner}`){
                whoWins="YOU WIN";
                function addWinAnimation(){
                    youPick.style =`opacity:1;transform: translateX(-150px);animation: pulse-animation 1.5s infinite;`;
                    increaseScore++;
                    showScore.innerHTML = increaseScore;
                    if(window.innerWidth < 800){
                        youPick.style.removeProperty('transform');
                    }
                }
                setTimeout(addWinAnimation,3000);
            }else if(randomClass[addRandom]===`${loser}`){
                whoWins="YOU LOSE";
                function addLoseAnimation(){
                    housePick.style =`opacity:1;transform: translateX(150px);animation: pulse-animation 1.5s infinite;`;
                    increaseScore--;
                    showScore.innerHTML = increaseScore;
                    if(window.innerWidth < 800){
                        housePick.style.removeProperty('transform');
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
                <div class="${classClicked}-game you-pick">
                    <div class="${classClicked}-img-game">
                        <img src="./images/icon-${classClicked}.svg" alt="${classClicked}-icon">
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

