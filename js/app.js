"use strict"

    let ruleBtn = document.querySelector(".rule-btn");
    let hardRuleBtn = document.querySelector(".hard-btn");
    let showRules = document.querySelector(".show-rules");
    let cancel = document.querySelector(".cancel");
    let main = document.querySelector("#main");
    let content = document.querySelector(".content");

    let game =document.querySelector(".game");
    let hardGame =document.querySelector(".hard-game");
    let gameStart =document.querySelector(".game-start");
    let randomClass = ['rock','paper','scissors'];
    let addRandom = Math.floor(Math.random() * randomClass.length);
    let showScore = document.querySelector(".show-score");
    let increaseScore=0;


function displayRules(){

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

function displayHard(){
    let ruleImg = document.querySelector(".rule-img");
    let imgHolder = document.querySelector(".img-holder");
    hardRuleBtn.addEventListener("click",()=>{

        gameStart.style=`display:none;`;
        if(hardRuleBtn.textContent == "HARD"){
            game.classList.add("game-toggle");
            hardGame.classList.add("hard-game-toggle");
            hardRuleBtn.innerHTML="EASY";
            randomClass=['rock','paper','scissors','spock','lizard'];
            addRandom = Math.floor(Math.random() * randomClass.length);
            ruleImg.innerHTML=`<img src="./images/image-rules-bonus.svg" alt="rules">`;
            imgHolder.innerHTML=`<img src="./images/logo-bonus.svg" alt="logo-bonus">`;
            
        }else if(hardRuleBtn.textContent == "EASY"){
            game.classList.remove("game-toggle");
            hardGame.classList.remove("hard-game-toggle");
            hardRuleBtn.innerHTML="HARD";
            ruleImg.innerHTML=`<img src="./images/image-rules.svg" alt="rules">`;
            imgHolder.innerHTML=`<img src="./images/logo.svg" alt="logo">`;
            randomClass=['rock','paper','scissors'];
            addRandom = Math.floor(Math.random() * randomClass.length);
        }
            
    })
}

function disableButtons(){
    hardRuleBtn.disabled = false;
    ruleBtn.disabled = false;
}


displayRules();
displayHard();



content.addEventListener("click",function(e){

    compareWho('paper','rock','scissors','spock','lizard');
    compareWho('scissors','paper','rock','lizard','spock');
    compareWho('rock','scissors','paper','lizard','spock');
    compareWho('lizard','paper','rock','spock','scissors');
    compareWho('spock','scissors','lizard','rock','paper');

    let youSelect = document.querySelector("#you-select");
    let houseSelect = document.querySelector("#house-select");
    let result = document.querySelector("#result");
    let headingYouPick = document.querySelector("#you-heading");
    let headingHousePick = document.querySelector("#house-heading");

    function showYouPick(){
        youSelect.classList.add("you-rotate");
        hardRuleBtn.disabled = true;
        ruleBtn.disabled = true;
    }
    function showHousePick(){
        houseSelect.classList.add("house-rotate");
    }
    function showWhoWon(){

        houseSelect.classList.add("house-transform");
        youSelect.classList.add("you-transform");
        result.classList.add("show-result");
        headingYouPick.classList.add("you-transform");
        headingHousePick.classList.add("house-transform");

        if(window.innerWidth < 800){
            youSelect.classList.remove("you-transform");
            houseSelect.classList.remove("house-transform");
            headingYouPick.classList.remove("you-transform");
            headingHousePick.classList.remove("house-transform");
        }
    }

    function playAgain(){
        addRandom = Math.floor(Math.random() * randomClass.length);
        let play = document.querySelector("#play-again");
        play.style =`animation: pulse-text 1.5s infinite;`;

        play.addEventListener("click",()=>{
            if(hardRuleBtn.textContent == "HARD"){
                game.classList.remove("game-toggle");
                hardGame.classList.remove("hard-game-toggle");
            }else if(hardRuleBtn.textContent == "EASY"){
                game.classList.add("game-toggle");
                hardGame.classList.add("hard-game-toggle");
            }
            gameStart.style=`display:none;`;
        })


    }

    setTimeout(playAgain,3000);
    
    function compareWho(classClicked,winner,loser,secWinner,secLoser){
        let whoWins = "";

        if(e.target.classList.contains(`${classClicked}`)){
    
            setTimeout(showYouPick,0);
            setTimeout(showHousePick,1000);
            setTimeout(showWhoWon,2000);
            setTimeout(disableButtons,3000);
        
            if(randomClass[addRandom]===`${winner}` || randomClass[addRandom]===`${secWinner}`){
                whoWins="YOU WIN";
                function addWinAnimation(){
                    youSelect.style =`animation: pulse-animation 1.5s infinite;`;
                    increaseScore++;
                    showScore.innerHTML = increaseScore;
                }
                setTimeout(addWinAnimation,3000);
            }else if(randomClass[addRandom]===`${loser}` || randomClass[addRandom]===`${secLoser}`){
                whoWins="YOU LOSE";
                function addLoseAnimation(){
                    houseSelect.style =`animation: pulse-animation 1.5s infinite;`;
                    increaseScore--;
                    showScore.innerHTML = increaseScore;
                }
                setTimeout(addLoseAnimation,3000);
            }else(whoWins="DRAW");
    
            gameStart.innerHTML=`
            <h2 id="you-heading" class="heading-you-pick">YOU PICKED</h2>
            <h2 id="house-heading" class="heading-house-pick">THE HOUSE PICKED</h2>
                
                <div id="result" class="result">
                    <h1>${whoWins}</h1>
                    <button id="play-again">PLAY AGAIN</button>
                </div>
                <div id="you-select" class="${classClicked}-game you-pick">
                    <div class="${classClicked}-img-game">
                        <img src="./images/icon-${classClicked}.svg" alt="${classClicked}-icon">
                    </div>              
                </div>
                <div id="house-select" class="${randomClass[addRandom]}-game house-pick">
                    <div class="${randomClass[addRandom]}-img-game">
                        <img src="./images/icon-${randomClass[addRandom]}.svg" alt="${randomClass[addRandom]}-icon">
                    </div>   
                </div>
            `;
            game.classList.add("game-toggle");
            hardGame.classList.remove("hard-game-toggle")
            gameStart.style=`display:flex;`;
      
    
        }
    
    
    }

    
})

