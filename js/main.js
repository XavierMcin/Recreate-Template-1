
/************************/
/*HOME SLIDER ANIMATIONS*/
/************************/



// let dot1 = document.querySelector('#nav-dots li:first-of-type');
// let dot2 = document.querySelector('#nav-dots li:nth-of-type(2)');
// let dot3 = document.querySelector('#nav-dots li:nth-of-type(3)');
// let dot4 = document.querySelector('#nav-dots li:last-of-type');

// let sliderPhoto = document.querySelector('.home section #image-slider .slide-pics div .img-container');
// let sliderNumber = document.querySelector('.home section #image-slider .slide-title div:first-of-type ul li');
// let sliderHeader = document.querySelector('.home section #image-slider .slide-title div:nth-of-type(2) .h1-wrapper h1');
// let sliderButton = document.querySelector('.home section #image-slider .slide-title div:last-of-type ul li');


// let photoWidth = (sliderPhoto.offsetWidth) + 70;
// let numberWidth = sliderNumber.offsetWidth;
// let headerHeight = sliderHeader.offsetHeight;
// let buttonHeight = sliderButton.offsetHeight;

// let headerDiv = document.querySelector('main section #image-slider .slide-title div:nth-of-type(2) .h1-wrapper');
// let numbersDiv = document.querySelector('main section #image-slider .slide-title div:first-of-type ul');
// let viewDiv = document.querySelector('main section #image-slider .slide-title div:last-of-type ul');
// let photosDiv = document.querySelector('main section #image-slider .slide-pics');

// let Hstyle = getComputedStyle(headerDiv);
// let Nstyle = getComputedStyle(numbersDiv);
// let Vstyle = getComputedStyle(viewDiv);
// let Pstyle = getComputedStyle(photosDiv);

let webPage = document.querySelector('main');

console.log(webPage.classList);

if (webPage.classList == "home") {


    let dot1 = document.querySelector('#nav-dots li:first-of-type');
    let dot2 = document.querySelector('#nav-dots li:nth-of-type(2)');
    let dot3 = document.querySelector('#nav-dots li:nth-of-type(3)');
    let dot4 = document.querySelector('#nav-dots li:last-of-type');

    let sliderPhoto = document.querySelector('.home section #image-slider .slide-pics div .img-container');
    let sliderNumber = document.querySelector('.home section #image-slider .slide-title div:first-of-type ul li');
    let sliderHeader = document.querySelector('.home section #image-slider .slide-title div:nth-of-type(2) .h1-wrapper h1');
    let sliderButton = document.querySelector('.home section #image-slider .slide-title div:last-of-type ul li');


    let photoWidth = (sliderPhoto.offsetWidth) + 70;
    let numberWidth = sliderNumber.offsetWidth;
    let headerHeight = sliderHeader.offsetHeight;
    let buttonHeight = sliderButton.offsetHeight;

    let headerDiv = document.querySelector('main section #image-slider .slide-title div:nth-of-type(2) .h1-wrapper');
    let numbersDiv = document.querySelector('main section #image-slider .slide-title div:first-of-type ul');
    let viewDiv = document.querySelector('main section #image-slider .slide-title div:last-of-type ul');
    let photosDiv = document.querySelector('main section #image-slider .slide-pics');

    let Hstyle = getComputedStyle(headerDiv);
    let Nstyle = getComputedStyle(numbersDiv);
    let Vstyle = getComputedStyle(viewDiv);
    let Pstyle = getComputedStyle(photosDiv);









    dot1.onclick = function() {
        let Hcurr = parseInt(Hstyle.top);
        let Ncurr = parseInt(Nstyle.left);
        let Vcurr = parseInt(Vstyle.top);
        let Pcurr = parseInt(Pstyle.left);
        
        if (Hcurr == -510) {
            console.log('nothing');
        } else if (Hcurr == -340) {
            headerDiv.style.top = (Hcurr - headerHeight) + "px";
            numbersDiv.style.left = (Ncurr + numberWidth) + "px";
            viewDiv.style.top = (Vcurr + buttonHeight) + "px";
            photosDiv.style.left = (Pcurr + photoWidth) + "px";
        } else if (Hcurr == -170) {
            headerDiv.style.top = (Hcurr - (headerHeight * 2)) + "px";
            numbersDiv.style.left = (Ncurr + (numberWidth * 2)) + "px";
            viewDiv.style.top = (Vcurr + (buttonHeight * 2)) + "px";
            photosDiv.style.left = (Pcurr + (photoWidth * 2)) + "px";
        } else if (Hcurr == 0) {
            headerDiv.style.top = (Hcurr - (headerHeight * 3)) + "px";
            numbersDiv.style.left = (Ncurr + (numberWidth * 3)) + "px";
            viewDiv.style.top = (Vcurr + (buttonHeight * 3)) + "px";
            photosDiv.style.left = (Pcurr + (photoWidth * 3)) + "px";
        }
    
    }
    
    dot2.onclick = function() {
        let Hcurr = parseInt(Hstyle.top);
        let Ncurr = parseInt(Nstyle.left);
        let Vcurr = parseInt(Vstyle.top);
        let Pcurr = parseInt(Pstyle.left);
        
        if (Hcurr == -510) {
            headerDiv.style.top = (Hcurr + headerHeight) + "px";
            numbersDiv.style.left = (Ncurr - numberWidth) + "px";
            viewDiv.style.top = (Vcurr - buttonHeight) + "px";
            photosDiv.style.left = (Pcurr - photoWidth) + "px";
        } else if (Hcurr == -340) {
            console.log('nothing');
        } else if (Hcurr == -170) {
            headerDiv.style.top = (Hcurr - headerHeight) + "px";
            numbersDiv.style.left = (Ncurr + numberWidth) + "px";
            viewDiv.style.top = (Vcurr + buttonHeight) + "px";
            photosDiv.style.left = (Pcurr + photoWidth) + "px";
        } else if (Hcurr == 0) {
            headerDiv.style.top = (Hcurr - (headerHeight * 2)) + "px";
            numbersDiv.style.left = (Ncurr + (numberWidth * 2)) + "px";
            viewDiv.style.top = (Vcurr + (buttonHeight * 2)) + "px";
            photosDiv.style.left = (Pcurr + (photoWidth * 2)) + "px";
        }
    
    }
    
    dot3.onclick = function() {
        let Hcurr = parseInt(Hstyle.top);
        let Ncurr = parseInt(Nstyle.left);
        let Vcurr = parseInt(Vstyle.top);
        let Pcurr = parseInt(Pstyle.left);
        
        if (Hcurr == -510) {
            headerDiv.style.top = (Hcurr + (headerHeight * 2)) + "px";
            numbersDiv.style.left = (Ncurr - (numberWidth * 2)) + "px";
            viewDiv.style.top = (Vcurr - (buttonHeight * 2)) + "px";
            photosDiv.style.left = (Pcurr - (photoWidth * 2)) + "px";
        } else if (Hcurr == -340) {
            headerDiv.style.top = (Hcurr + headerHeight) + "px";
            numbersDiv.style.left = (Ncurr - numberWidth) + "px";
            viewDiv.style.top = (Vcurr - buttonHeight) + "px";
            photosDiv.style.left = (Pcurr - photoWidth) + "px";
        } else if (Hcurr == -170) {
            console.log('nothing');
        } else if (Hcurr == 0) {
            headerDiv.style.top = (Hcurr - headerHeight) + "px";
            numbersDiv.style.left = (Ncurr + numberWidth) + "px";
            viewDiv.style.top = (Vcurr + buttonHeight) + "px";
            photosDiv.style.left = (Pcurr + photoWidth) + "px";
        }
    
    }
    
    dot4.onclick = function() {
        let Hcurr = parseInt(Hstyle.top);
        let Ncurr = parseInt(Nstyle.left);
        let Vcurr = parseInt(Vstyle.top);
        let Pcurr = parseInt(Pstyle.left);
        
        if (Hcurr == -510) {
            headerDiv.style.top = (Hcurr + (headerHeight * 3)) + "px";
            numbersDiv.style.left = (Ncurr - (numberWidth * 3)) + "px";
            viewDiv.style.top = (Vcurr - (buttonHeight * 3)) + "px";
            photosDiv.style.left = (Pcurr - (photoWidth * 3)) + "px";
        } else if (Hcurr == -340) {
            headerDiv.style.top = (Hcurr + (headerHeight * 2)) + "px";
            numbersDiv.style.left = (Ncurr - (numberWidth * 2)) + "px";
            viewDiv.style.top = (Vcurr - (buttonHeight * 2)) + "px";
            photosDiv.style.left = (Pcurr - (photoWidth * 2)) + "px";
        } else if (Hcurr == -170) {
            headerDiv.style.top = (Hcurr + headerHeight) + "px";
            numbersDiv.style.left = (Ncurr - numberWidth) + "px";
            viewDiv.style.top = (Vcurr - buttonHeight) + "px";
            photosDiv.style.left = (Pcurr - photoWidth) + "px";
        } else if (Hcurr == 0) {
            console.log('nothing');
        }
    
    }
}

// dot1.onclick = function() {
//     let Hcurr = parseInt(Hstyle.top);
//     let Ncurr = parseInt(Nstyle.left);
//     let Vcurr = parseInt(Vstyle.top);
//     let Pcurr = parseInt(Pstyle.left);
    
//     if (Hcurr == -510) {
//         console.log('nothing');
//     } else if (Hcurr == -340) {
//         headerDiv.style.top = (Hcurr - headerHeight) + "px";
//         numbersDiv.style.left = (Ncurr + numberWidth) + "px";
//         viewDiv.style.top = (Vcurr + buttonHeight) + "px";
//         photosDiv.style.left = (Pcurr + photoWidth) + "px";
//     } else if (Hcurr == -170) {
//         headerDiv.style.top = (Hcurr - (headerHeight * 2)) + "px";
//         numbersDiv.style.left = (Ncurr + (numberWidth * 2)) + "px";
//         viewDiv.style.top = (Vcurr + (buttonHeight * 2)) + "px";
//         photosDiv.style.left = (Pcurr + (photoWidth * 2)) + "px";
//     } else if (Hcurr == 0) {
//         headerDiv.style.top = (Hcurr - (headerHeight * 3)) + "px";
//         numbersDiv.style.left = (Ncurr + (numberWidth * 3)) + "px";
//         viewDiv.style.top = (Vcurr + (buttonHeight * 3)) + "px";
//         photosDiv.style.left = (Pcurr + (photoWidth * 3)) + "px";
//     }

// }

// dot2.onclick = function() {
//     let Hcurr = parseInt(Hstyle.top);
//     let Ncurr = parseInt(Nstyle.left);
//     let Vcurr = parseInt(Vstyle.top);
//     let Pcurr = parseInt(Pstyle.left);
    
//     if (Hcurr == -510) {
//         headerDiv.style.top = (Hcurr + headerHeight) + "px";
//         numbersDiv.style.left = (Ncurr - numberWidth) + "px";
//         viewDiv.style.top = (Vcurr - buttonHeight) + "px";
//         photosDiv.style.left = (Pcurr - photoWidth) + "px";
//     } else if (Hcurr == -340) {
//         console.log('nothing');
//     } else if (Hcurr == -170) {
//         headerDiv.style.top = (Hcurr - headerHeight) + "px";
//         numbersDiv.style.left = (Ncurr + numberWidth) + "px";
//         viewDiv.style.top = (Vcurr + buttonHeight) + "px";
//         photosDiv.style.left = (Pcurr + photoWidth) + "px";
//     } else if (Hcurr == 0) {
//         headerDiv.style.top = (Hcurr - (headerHeight * 2)) + "px";
//         numbersDiv.style.left = (Ncurr + (numberWidth * 2)) + "px";
//         viewDiv.style.top = (Vcurr + (buttonHeight * 2)) + "px";
//         photosDiv.style.left = (Pcurr + (photoWidth * 2)) + "px";
//     }

// }

// dot3.onclick = function() {
//     let Hcurr = parseInt(Hstyle.top);
//     let Ncurr = parseInt(Nstyle.left);
//     let Vcurr = parseInt(Vstyle.top);
//     let Pcurr = parseInt(Pstyle.left);
    
//     if (Hcurr == -510) {
//         headerDiv.style.top = (Hcurr + (headerHeight * 2)) + "px";
//         numbersDiv.style.left = (Ncurr - (numberWidth * 2)) + "px";
//         viewDiv.style.top = (Vcurr - (buttonHeight * 2)) + "px";
//         photosDiv.style.left = (Pcurr - (photoWidth * 2)) + "px";
//     } else if (Hcurr == -340) {
//         headerDiv.style.top = (Hcurr + headerHeight) + "px";
//         numbersDiv.style.left = (Ncurr - numberWidth) + "px";
//         viewDiv.style.top = (Vcurr - buttonHeight) + "px";
//         photosDiv.style.left = (Pcurr - photoWidth) + "px";
//     } else if (Hcurr == -170) {
//         console.log('nothing');
//     } else if (Hcurr == 0) {
//         headerDiv.style.top = (Hcurr - headerHeight) + "px";
//         numbersDiv.style.left = (Ncurr + numberWidth) + "px";
//         viewDiv.style.top = (Vcurr + buttonHeight) + "px";
//         photosDiv.style.left = (Pcurr + photoWidth) + "px";
//     }

// }

// dot4.onclick = function() {
//     let Hcurr = parseInt(Hstyle.top);
//     let Ncurr = parseInt(Nstyle.left);
//     let Vcurr = parseInt(Vstyle.top);
//     let Pcurr = parseInt(Pstyle.left);
    
//     if (Hcurr == -510) {
//         headerDiv.style.top = (Hcurr + (headerHeight * 3)) + "px";
//         numbersDiv.style.left = (Ncurr - (numberWidth * 3)) + "px";
//         viewDiv.style.top = (Vcurr - (buttonHeight * 3)) + "px";
//         photosDiv.style.left = (Pcurr - (photoWidth * 3)) + "px";
//     } else if (Hcurr == -340) {
//         headerDiv.style.top = (Hcurr + (headerHeight * 2)) + "px";
//         numbersDiv.style.left = (Ncurr - (numberWidth * 2)) + "px";
//         viewDiv.style.top = (Vcurr - (buttonHeight * 2)) + "px";
//         photosDiv.style.left = (Pcurr - (photoWidth * 2)) + "px";
//     } else if (Hcurr == -170) {
//         headerDiv.style.top = (Hcurr + headerHeight) + "px";
//         numbersDiv.style.left = (Ncurr - numberWidth) + "px";
//         viewDiv.style.top = (Vcurr - buttonHeight) + "px";
//         photosDiv.style.left = (Pcurr - photoWidth) + "px";
//     } else if (Hcurr == 0) {
//         console.log('nothing');
//     }

// }











/*********************/
/*****MOBILE MENU*****/
/*********************/


let mobileMenu = document.querySelector('#mobile-menu');
let mobileNav = document.querySelector('.main-header nav');

mobileMenu.onclick = function() {
    this.classList.toggle('clicked');
    mobileNav.classList.toggle('clicked');
    console.log('clicked');
}