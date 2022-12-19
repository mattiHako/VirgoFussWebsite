
/* Preloader for the site */
var loader = document.getElementById("preloader")
var center = document.getElementById("center")

window.addEventListener("load", function(){
    loader.style.display = "none"
    center.classList.toggle("active")

});


/* Footer slideshow operation */

const slider = document.getElementById("slideShow");

let grabAnimation = document.getElementById("grabAnimation")


let isDown = false;
let startX;
let scrollLeft;




slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab"
});

slider.addEventListener("mousedown", (e) => {
    slider.style.cursor = "grabbing"
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX)
    
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab"
    isDown = false;
    
});


slider.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    console.log({x, startX})
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
    grabAnimation.style.display = "none"
});


/* Burger navigation for mobile */

var burger = document.getElementById("burger");
var burgerOpen = document.getElementById("burgerOpen");
var centerPage = document.getElementById("center");


burger.addEventListener("click", openBurger);

function openBurger(){    
    burgerOpen.classList.toggle("active")
};

centerPage.addEventListener("click", closeBurger)

function closeBurger(){
    burgerOpen.classList.remove("active")
};




/* Bio page button */

var BioContainer = document.querySelector(".BioContainer");
var bio = document.getElementById("bio");
var bioBurger = document.getElementById("bioBurger");


bio.addEventListener("click", clickBio);
bioBurger.addEventListener("click", clickBioBurger)

function clickBio(){  
    BioContainer.classList.toggle("active")
    albumContainer.classList.remove("active")
    youtubeContainer.classList.remove("active")

};

function clickBioBurger(){
    BioContainer.classList.toggle("active")
    albumContainer.classList.remove("active")
    youtubeContainer.classList.remove("active")
    burgerOpen.classList.remove("active")
}

/* Music page button */

var albumContainer = document.querySelector(".albumContainer");
var music = document.getElementById("music");
var musicBurger = document.getElementById("musicBurger");

music.addEventListener("click", clickMusic);
musicBurger.addEventListener("click", clickMusicBurger);

function clickMusic(){   
    albumContainer.classList.toggle("active")
    BioContainer.classList.remove("active")
    youtubeContainer.classList.remove("active")
};

function clickMusicBurger(){
    albumContainer.classList.toggle("active")
    BioContainer.classList.remove("active")
    youtubeContainer.classList.remove("active")
    burgerOpen.classList.remove("active")
}

/* Video page button */

var youtubeContainer = document.querySelector(".youtubeContainer");
var video = document.getElementById("video");
var videoBurger = document.getElementById("videoBurger");

video.addEventListener("click", clickVideo);
videoBurger.addEventListener("click", clickVideoBurger);


function clickVideo(){   
    youtubeContainer.classList.toggle("active")
    albumContainer.classList.remove("active")
    BioContainer.classList.remove("active")
};

function clickVideoBurger(){   
    youtubeContainer.classList.toggle("active")
    albumContainer.classList.remove("active")
    BioContainer.classList.remove("active")
    burgerOpen.classList.remove("active")
};

/* home page button */

var home = document.getElementById("home");

home.addEventListener("click", clickHome);

function clickHome(){   
    youtubeContainer.classList.remove("active")
    albumContainer.classList.remove("active")
    BioContainer.classList.remove("active")
};




