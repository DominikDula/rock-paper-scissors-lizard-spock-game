"use strict"

function showRules(){

    let ruleBtn = document.querySelector(".rule-btn");
    let showRules = document.querySelector(".show-rules");
    let cancel = document.querySelector(".cancel");
    let content = document.querySelector(".content");
    let main = document.querySelector("#main");

    ruleBtn.addEventListener("click",() =>{
        showRules.style=`display:flex`;
        main.style=`opacity:0.5;background:black;`;
    });

    cancel.addEventListener("click",() =>{
        content.style =`display:block;opacity:1;`;;
        showRules.style =`display:none`;
        main.style=`opacity:1;background:none;`;
    });

}

showRules();

