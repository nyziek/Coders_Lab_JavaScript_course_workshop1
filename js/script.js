//Dropdown menu

var dropdownMenu = document.querySelector(".menu__item:first-of-type");

function showMenu() {
    dropdownMenu.children[1].style.visibility = "visible";
    dropdownMenu.children[1].style.opacity = "1";
}

function hideMenu() {
    dropdownMenu.children[1].style.visibility = "hidden";
    dropdownMenu.children[1].style.opacity = "0";
}

dropdownMenu.addEventListener("mouseenter", showMenu);
dropdownMenu.addEventListener("mouseleave", hideMenu);

//Slider

var nextButton = document.querySelector(".slideshow__arrow--right");
var prevButton = document.querySelector(".slideshow__arrow--left");
var slideList = document.querySelectorAll(".slideshow__slide");
var slideIndex = 0;

console.log(nextButton);
console.log(prevButton);
console.log(slideList);
console.log(slideIndex);

slideList[slideIndex].classList.add("visible");

function showNext(event) {
    event.preventDefault();

    slideList[slideIndex].classList.remove("visible");
    slideIndex++;

    if (slideIndex >= slideList.length) {
        slideIndex = 0;
    }

    slideList[slideIndex].classList.add("visible");
}

function showPrev(event) {
    event.preventDefault();

    slideList[slideIndex].classList.remove("visible");
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = slideList.length - 1;
    }

    slideList[slideIndex].classList.add("visible");
}

nextButton.addEventListener("click", showNext);
prevButton.addEventListener("click", showPrev);

//Products



//Calculator