    var divAdvanced = document.querySelector('.advanced');
    var divRules = document.querySelector('.rules-btn');
    var divCloseRules = document.querySelector('.close-rules');

    divRules.addEventListener("click",() =>{
        const box = document.getElementsByTagName('aside');
        box[0].style.transition = "1000ms";
        box[0].style.opacity = "100%";
        box[0].style.zIndex = "0";
    })

    divCloseRules.addEventListener("click",() =>{
        const box = document.getElementsByTagName('aside');
        box[0].style.opacity = "0";
        box[0].style.zIndex = "-1";
    })

    divAdvanced.addEventListener("click",() =>{
        const box = document.getElementsByClassName('step-1-advanced');
        box[0].style.transform = "scale(1, 1)";
        box[0].style.opacity = "100%";
        const boxx = document.getElementsByClassName('step-1');
        boxx[0].style.visibility = "hidden";
    })
    

   

var paper = document.querySelector(".paper")
var scissors = document.querySelector(".scissors")
var rock = document.querySelector(".rock")
var step2 = document.querySelector(".step-2")
var step1 = document.querySelector(".step-1")
var playerpick = document.querySelector(".player-pick")
var computerpick = document.querySelector(".computer-pick")
var announce = document.querySelector(".annouce-winner-text")

var scoreValue = document.querySelector(".score-value")
scoreValue.textContent = localStorage.getItem("score")
announce.textContent = ""
announce.parentElement.style.visibility = "hidden"
function choose(div,name) {
    step1.classList.add('step-1-minimize')
    playerpick.querySelector('.replace').classList.remove("rock")
    playerpick.querySelector('.replace').classList.remove("paper")
    playerpick.querySelector('.replace').classList.remove("scissors")
    step2.classList.toggle('step-2-minimizer')
    console.log(playerpick.querySelector('.replace').querySelector('div'))
    if (playerpick.querySelector('.replace').querySelector('div')){
        playerpick.querySelector('.replace').querySelector('div').remove()
        }
    playerpick.querySelector('.replace').append(div.cloneNode(true).querySelector('div'))
    playerpick.querySelector('.replace').classList.add(name)
    setTimeout(() => {
    computerchoose(name)
    },1000)
    }
paper.addEventListener("click", () => choose(paper,"paper"))
scissors.addEventListener("click", () => choose(scissors,"scissors"))
rock.addEventListener("click", () => choose(rock,"rock"))

function computerchoose(win) {
    var list = [paper,rock,scissors]
    var listname = ["paper","rock","scissors"]
    index = Math.floor(Math.random() * 3)
    console.log(index)
    computerpick.querySelector('.replace').classList.remove("rock")
    computerpick.querySelector('.replace').classList.remove("paper")
    computerpick.querySelector('.replace').classList.remove("scissors")
    if (computerpick.querySelector('.replace').querySelector('div')){
        computerpick.querySelector('.replace').querySelector('div').remove()
        }
        computerpick.querySelector('.replace').append(list[index].cloneNode(true).querySelector('div'))
        computerpick.querySelector('.replace').classList.add(listname[index])
    if (win == "paper" && listname[index] == "paper"){
        announce.textContent = "TIE"

    }
    else if (win == "paper" && listname[index] == "rock"){
        announce.textContent = "WIN"
        scoring()
    }
    else if (win == "paper" && listname[index] == "scissors"){
        announce.textContent = "LOOSE"
    }
    else if (win == "rock" && listname[index] == "rock"){
        announce.textContent = "TIE"
    }
    else if (win == "rock" && listname[index] == "scissors"){
        announce.textContent = "WIN"
        scoring()
    }
    else if (win == "rock" && listname[index] == "paper"){
        announce.textContent = "LOOSE"
    }
    else if (win == "scissors" && listname[index] == "scissors"){
        announce.textContent = "TIE"
    }
    else if (win == "scissors" && listname[index] == "paper"){
        announce.textContent = "WIN"
        scoring()
        
    }
    else if (win == "scissors" && listname[index] == "rock"){
        announce.textContent = "LOOSE"
    }
    announce.parentElement.style.visibility = "visible"
    }

function scoring(params) {
    if (!localStorage.getItem("score")){
        localStorage.setItem("score",1);
    }
    else
    {
        var score = localStorage.getItem("score");
        localStorage.setItem("score",(++score) );
    }
    scoreValue.textContent = localStorage.getItem("score")
}