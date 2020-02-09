let dot1 = document.querySelector('#nav-dots li:first-of-type');
let dot2 = document.querySelector('#nav-dots li:nth-of-type(2)');
let dot3 = document.querySelector('#nav-dots li:nth-of-type(3)');
let dot4 = document.querySelector('#nav-dots li:last-of-type');

let testDiv = document.querySelector('main section #image-slider .slide-title div:nth-of-type(2) .h1-wrapper');

let style = getComputedStyle(testDiv);



dot1.onclick = function() {
    let curr = parseInt(style.top);
    
    testDiv.style.top = (curr + 170) + "px";
}