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
    

   