let sliderCards = document.querySelectorAll('.slider__cards');
let sliderPrev = document.querySelector('.slider__button_prev');
let sliderNext = document.querySelector('.slider__button_next');

let currentItem = 0;
let isEnabled = true;

function hideItem(sliderCard, direction) {
    isEnabled = false;

    sliderCard.addEventListener('animationend', function() {
        sliderCard.classList.remove('active');
        sliderCard.classList.remove(direction);
    }, { once: true });

    sliderCard.classList.add(direction)
}

function showItem(sliderCard, direction) {
    sliderCard.classList.add('active');
    sliderCard.classList.add('next');

    sliderCard.addEventListener('animationend', function() {
        sliderCard.classList.remove(direction);
        sliderCard.classList.remove('next');
        isEnabled = true;
    }, { once: true });

    sliderCard.classList.add(direction)
}



function nextItem() {
    hideItem(sliderCards[currentItem], 'to-right');
    changeCurrentItem(currentItem + 1);
    showItem(sliderCards[currentItem], 'from-left')
}

function previousItem() {
    hideItem(sliderCards[currentItem], 'to-left');
    changeCurrentItem(currentItem - 1);
    showItem(sliderCards[currentItem], 'from-right')
}

function changeCurrentItem(n) {
    currentItem = (n + sliderCards.length) % sliderCards.length
    console.log(currentItem);
}

sliderPrev.addEventListener('click', function() {
    if (isEnabled) {
        previousItem();
    }
});
sliderNext.addEventListener('click', function() {
    if (isEnabled) {
        nextItem();
    }
});