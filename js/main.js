let dot1 = document.querySelector('#nav-dots li:first-of-type');
let dot2 = document.querySelector('#nav-dots li:nth-of-type(2)');
let dot3 = document.querySelector('#nav-dots li:nth-of-type(3)');
let dot4 = document.querySelector('#nav-dots li:last-of-type');

let headerDiv = document.querySelector('main section #image-slider .slide-title div:nth-of-type(2) .h1-wrapper');
let numbersDiv = document.querySelector('main section #image-slider .slide-title div:first-of-type ul');
let viewDiv = document.querySelector('main section #image-slider .slide-title div:last-of-type ul');

let Hstyle = getComputedStyle(headerDiv);
let Nstyle = getComputedStyle(numbersDiv);
let Vstyle = getComputedStyle(viewDiv);



dot1.onclick = function() {
    let Hcurr = parseInt(Hstyle.top);
    let Ncurr = parseInt(Nstyle.left);
    let Vcurr = parseInt(Vstyle.top);
    
    if (Hcurr == -510) {
        console.log('nothing');
    } else if (Hcurr == -340) {
        headerDiv.style.top = (Hcurr - 170) + "px";
        numbersDiv.style.left = (Ncurr + 240) + "px";
        viewDiv.style.top = (Vcurr + 72) + "px";
    } else if (Hcurr == -170) {
        headerDiv.style.top = (Hcurr - 340) + "px";
        numbersDiv.style.left = (Ncurr + 480) + "px";
        viewDiv.style.top = (Vcurr + 144) + "px";
    } else if (Hcurr == 0) {
        headerDiv.style.top = (Hcurr - 510) + "px";
        numbersDiv.style.left = (Ncurr + 720) + "px";
        viewDiv.style.top = (Vcurr + 216) + "px";
    }

}

dot2.onclick = function() {
    let Hcurr = parseInt(Hstyle.top);
    let Ncurr = parseInt(Nstyle.left);
    let Vcurr = parseInt(Vstyle.top);
    
    if (Hcurr == -510) {
        headerDiv.style.top = (Hcurr + 170) + "px";
        numbersDiv.style.left = (Ncurr - 240) + "px";
        viewDiv.style.top = (Vcurr - 72) + "px";
    } else if (Hcurr == -340) {
        console.log('nothing');
    } else if (Hcurr == -170) {
        headerDiv.style.top = (Hcurr - 170) + "px";
        numbersDiv.style.left = (Ncurr + 240) + "px";
        viewDiv.style.top = (Vcurr + 72) + "px";
    } else if (Hcurr == 0) {
        headerDiv.style.top = (Hcurr - 340) + "px";
        numbersDiv.style.left = (Ncurr + 480) + "px";
        viewDiv.style.top = (Vcurr + 144) + "px";
    }

}

dot3.onclick = function() {
    let Hcurr = parseInt(Hstyle.top);
    let Ncurr = parseInt(Nstyle.left);
    let Vcurr = parseInt(Vstyle.top);
    
    if (Hcurr == -510) {
        headerDiv.style.top = (Hcurr + 340) + "px";
        numbersDiv.style.left = (Ncurr - 480) + "px";
        viewDiv.style.top = (Vcurr - 144) + "px";
    } else if (Hcurr == -340) {
        headerDiv.style.top = (Hcurr + 170) + "px";
        numbersDiv.style.left = (Ncurr - 240) + "px";
        viewDiv.style.top = (Vcurr - 72) + "px";
    } else if (Hcurr == -170) {
        console.log('nothing');
    } else if (Hcurr == 0) {
        headerDiv.style.top = (Hcurr - 170) + "px";
        numbersDiv.style.left = (Ncurr + 240) + "px";
        viewDiv.style.top = (Vcurr + 72) + "px";
    }

}

dot4.onclick = function() {
    let Hcurr = parseInt(Hstyle.top);
    let Ncurr = parseInt(Nstyle.left);
    let Vcurr = parseInt(Vstyle.top);
    
    if (Hcurr == -510) {
        headerDiv.style.top = (Hcurr + 510) + "px";
        numbersDiv.style.left = (Ncurr - 720) + "px";
        viewDiv.style.top = (Vcurr - 216) + "px";
    } else if (Hcurr == -340) {
        headerDiv.style.top = (Hcurr + 340) + "px";
        numbersDiv.style.left = (Ncurr - 480) + "px";
        viewDiv.style.top = (Vcurr - 144) + "px";
    } else if (Hcurr == -170) {
        headerDiv.style.top = (Hcurr + 170) + "px";
        numbersDiv.style.left = (Ncurr - 240) + "px";
        viewDiv.style.top = (Vcurr - 72) + "px";
    } else if (Hcurr == 0) {
        console.log('nothing');
    }

}