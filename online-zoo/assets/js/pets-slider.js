const sliderPrev = document.querySelector('.slider__button_prev');
const sliderNext = document.querySelector('.slider__button_next');
const sliderVisibleCards = document.querySelector('.slider__visible-cards');

let animals = [
    {
        img: 'panda.jpg',
        name: 'giant Pandas',
        location: 'Native to Southwest China',
        food: 'banana-bamboo_icon.svg',
    },
    {
        img: 'eagles.jpg',
        name: 'Eagles',
        location: 'Native to South America',
        food: 'meet-fish_icon.svg',
    },
    {
        img: 'gorillas.jpg',
        name: 'Gorillas',
        location: 'Native to Congo',
        food: 'banana-bamboo_icon.svg',
    },
    {
        img: 'sloth.jpg',
        name: 'Two-toed Sloth',
        location: 'Mesoamerica, South America',
        food: 'banana-bamboo_icon.svg',
    },
    {
        img: 'cheetahs.jpg',
        name: 'cheetahs',
        location: 'Native to Africa',
        food: 'meet-fish_icon.svg',
    },
    {
        img: 'penguins.jpg',
        name: 'Penguins',
        location: 'Native to Antarctica',
        food: 'meet-fish_icon.svg',
    },
    {
        img: 'alligators.jpg',
        name: 'Alligators',
        location: 'Native to Southeastern U. S.',
        food: 'meet-fish_icon.svg',
    },
    {
        img: 'toque.jpg',
        name: 'toque',
        location: 'Native to Africa',
        food: 'banana-bamboo_icon.svg',
    },
    {
        img: 'giraffe.jpg',
        name: 'giraffe',
        location: 'Native to Africa',
        food: 'banana-bamboo_icon.svg',
    },
    {
        img: 'panther.jpg',
        name: 'panther',
        location: 'Native to Africa',
        food: 'meet-fish_icon.svg',
    },
    {
        img: 'lemur.jpg',
        name: 'Lemur',
        location: 'Native to Africa',
        food: 'banana-bamboo_icon.svg',
    },
    {
        img: 'wolf.jpg',
        name: 'Wolf',
        location: 'Native to North America',
        food: 'meet-fish_icon.svg',
    },
]

animals.sort(() => Math.random() - 0.5);

let currentItem = 0;
let isEnabled = true;
let pages = [];
let pageElements = [];

window.addEventListener('resize', onWindowResize);
sliderPrev.addEventListener('click', previousItem);
sliderNext.addEventListener('click', nextItem);

onWindowResize();

function onWindowResize() {
    if (window.screen.width <= 998 && window.screen.width > 639) {
        pages = createPages(animals, 4);
    } else {
        pages = createPages(animals, 6);
    }

    drawPages();
}

function drawPages() {
    pageElements = [];
    sliderVisibleCards.innerHTML = '';
    for (let page of pages) {
        let pageElement = createPageElement(page);
        pageElements.push(pageElement);
        sliderVisibleCards.append(pageElement);
    }

    if (currentItem >= pageElements.length) {
        currentItem = pageElements.length - 1;
    }

    pageElements[currentItem].classList.add('active');
}


function createPages(animals, pageSize) {
    let pages = [];
    let page = [];
    for (let animal of animals) {
        page.push(animal);

        if (page.length >= pageSize) {
            pages.push(page);
            page = [];
        }
    }

    return pages;
}

function createPageElement(page) {
    const pageElement = document.createElement('div');
    pageElement.classList.add('slider__cards');
    for (let animal of page) {
        let sliderCard = createAnimalCard(animal);
        pageElement.append(sliderCard);
    }

    return pageElement;
}

function createAnimalCard(data) {
    let sliderCardLocation = document.createElement('div');
    sliderCardLocation.classList.add("slider__card-location");
    sliderCardLocation.textContent = data.location;

    let sliderCardName = document.createElement('div');
    sliderCardName.classList.add("slider__card-name");
    sliderCardName.textContent = data.name;

    let descriptionText = document.createElement('div');
    descriptionText.classList.add("slider__card-description-text");
    descriptionText.append(sliderCardName, sliderCardLocation);

    let imgFood = document.createElement('img');
    imgFood.src = `../../assets/icons/${data.food}`;
    imgFood.alt = data.food;

    let foodContainer = document.createElement('div');
    foodContainer.classList.add("slider__card-food");
    foodContainer.append(imgFood);

    let sliderCardDescription = document.createElement('div');
    sliderCardDescription.classList.add("slider__card-description");
    sliderCardDescription.append(descriptionText, foodContainer);

    let imgAnimal = document.createElement('img');
    imgAnimal.src = `../../assets/images/${data.img}`;
    imgAnimal.alt = data.name;

    let sliderCardImage = document.createElement('div');
    sliderCardImage.classList.add("slider__card-image");
    sliderCardImage.append(imgAnimal);

    let sliderCard = document.createElement('div');
    sliderCard.classList.add("slider__card");
    sliderCard.append(sliderCardImage, sliderCardDescription);

    return sliderCard;
}

function hideItem(sliderCard, direction) {
    isEnabled = false;

    sliderCard.addEventListener('animationend', function () {
        sliderCard.classList.remove('active');
        sliderCard.classList.remove(direction);
    }, { once: true });

    sliderCard.classList.add(direction)
}

function showItem(sliderCard, direction) {
    sliderCard.classList.add('active');
    sliderCard.style.width = sliderCard.offsetWidth + 'px';
    sliderVisibleCards.style.padding = '0px';
    sliderVisibleCards.style.margin = '0px';
    sliderCard.classList.add('next');

    sliderCard.addEventListener('animationend', function () {
        sliderCard.classList.remove(direction);
        sliderCard.classList.remove('next');
        sliderCard.style.width = null;
        sliderVisibleCards.style.padding = null;
        sliderVisibleCards.style.margin = null;
        isEnabled = true;
    }, { once: true });

    sliderCard.classList.add(direction)
}

function previousItem() {
    if (isEnabled) {
        hideItem(pageElements[currentItem], 'to-right');
        changeCurrentItem(currentItem + 1);
        showItem(pageElements[currentItem], 'from-left');
    }
}

function nextItem() {
    if (isEnabled) {
        hideItem(pageElements[currentItem], 'to-left');
        changeCurrentItem(currentItem - 1);
        showItem(pageElements[currentItem], 'from-right');
    }
}

function changeCurrentItem(n) {
    currentItem = (n + pageElements.length) % pageElements.length
    console.log(currentItem);
}
