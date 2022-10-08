let sliderCards = document.querySelectorAll('.slider__cards');
let sliderPrev = document.querySelector('.slider__button_prev');
let sliderNext = document.querySelector('.slider__button_next');

let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + sliderCards.length) % sliderCards.length
}

function hideItem(direction){
    isEnabled = false;
    sliderCards[currentItem].classList.add(direction)
    sliderCards[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    })
}

function showItem(direction){
    sliderCards[currentItem].classList.add('next', direction)
    sliderCards[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}



function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n - 1);
    showItem('from-right')
}

sliderPrev.addEventListener('click', function() {
    if (isEnabled) {
        console.log("1")
        previousItem(currentItem);
    }
});
sliderNext.addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});