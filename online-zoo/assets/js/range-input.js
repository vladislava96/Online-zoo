const testimonialsCards = document.querySelector(".testimonials__cards");
const body = document.querySelector('body');
const blackOut = document.querySelector('.menu-and-popup__background');

const testimonials = [
    {
        name: "Michael John",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Today",
        description: `<p>
            The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
            Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.
            My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill 
            a love for animals.
            </p>
            <p>
                The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online 
                zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son 
                delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for  
            </p>`
    },
    {
        name: "Oskar Samborsky",
        avatar: "user_icon2.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
        My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill 
        a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch 
        gouillas. </p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online 
        zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son 
        delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for </p>`
    },
    {
        name: "Fredericka Michelin",
        avatar: "user_icon3.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. 
        My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill 
        a love for animals.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to </p>`
    },
    {
        name: "Mila Riksha",
        avatar: "user_icon4.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Johnny Depp",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Brad Pitt",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Tom Cruise",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Mila Riksha",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Susan Sarandon",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Diane Keaton",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
    {
        name: "Jane Fonda",
        avatar: "user_icon.svg",
        location: "Local Austria",
        date: "Yesterday",
        description: `<p>My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways 
        to instill a love for animals.The best online zoo I’ve met. My son delighted very much 
        ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The 
        best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo 
        is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted 
        very much ljves to watch gouillas.</p>
        <p>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. 
        Online zoo is one jf </p>`
    },
]
let arrRandomTestimonials = [];


function createRandomNumbers(n, arr, min, max) {
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arr.includes(randomNumber)) {
        arr.push(randomNumber)
        } else {
        i--
        }
    }
}

createRandomNumbers(11, arrRandomTestimonials, 0, 10);

function generateCards() {
    for (let num of arrRandomTestimonials) {
        let testimonialData = testimonials[num];

        let testimonialsLocation = document.createElement('div');
        testimonialsLocation.classList.add("testimonials__location");
        testimonialsLocation.textContent = testimonialData.location;

        let testimonialsDate = document.createElement('div');
        testimonialsDate.classList.add("testimonials__date");
        testimonialsDate.textContent = testimonialData.date;

        let testimonialsLocationDate = document.createElement('div');
        testimonialsLocationDate.classList.add("testimonials__location-date");
        testimonialsLocationDate.append(testimonialsLocation, testimonialsDate);

        let testimonialsName = document.createElement('div');
        testimonialsName.classList.add("testimonials__name");
        testimonialsName.textContent = testimonialData.name;

        let testimonialsNameLocation = document.createElement('div');
        testimonialsNameLocation.classList.add("testimonials__name-location");
        testimonialsNameLocation.append(testimonialsName, testimonialsLocationDate);

        let avatar = document.createElement('img');
        avatar.src = `../../assets/images/${testimonialData.avatar}`

        let testimonialsPhoto = document.createElement('div');
        testimonialsPhoto.classList.add("testimonials__photo");
        testimonialsPhoto.append(avatar);

        let testimonialsData = document.createElement('div');
        testimonialsData.classList.add("testimonials__data");
        testimonialsData.append(testimonialsPhoto, testimonialsNameLocation);

        let testimonialsDescription = document.createElement('div');
        testimonialsDescription.classList.add("testimonials__description");
        testimonialsDescription.innerHTML = testimonialData.description;

        let testimonialsCard = document.createElement('div');
        testimonialsCard.classList.add("testimonials__card");
        testimonialsCard.append(testimonialsData, testimonialsDescription);
        

        let testimonialsBorder = document.createElement('div');
        testimonialsBorder.classList.add("testimonials__card-border");
        testimonialsBorder.append(testimonialsCard);

        testimonialsCard.addEventListener('click', () => {
            if (window.screen.width < 1000) {
                createModal(testimonialData)
            }
            
        });

        testimonialsCards.append(testimonialsBorder);
    }
}
generateCards();

function createModal(data) {
    let testimonialsLocation = document.createElement('div');
    testimonialsLocation.classList.add("testimonial-modal__location");
    testimonialsLocation.textContent = data.location;

    let testimonialsDate = document.createElement('div');
    testimonialsDate.classList.add("testimonial-modal__date");
    testimonialsDate.textContent = data.date;

    let testimonialsLocationDate = document.createElement('div');
    testimonialsLocationDate.classList.add("testimonial-modal__location-date");
    testimonialsLocationDate.append(testimonialsLocation, testimonialsDate);

    let testimonialsName = document.createElement('div');
    testimonialsName.classList.add("testimonial-modal__name");
    testimonialsName.textContent = data.name;

    let testimonialsNameLocation = document.createElement('div');
    testimonialsNameLocation.classList.add("testimonial-modal__name-location");
    testimonialsNameLocation.append(testimonialsName, testimonialsLocationDate);

    let avatar = document.createElement('img');
    avatar.src = `../../assets/images/${data.avatar}`

    let testimonialsPhoto = document.createElement('div');
    testimonialsPhoto.classList.add("testimonial-modal__photo");
    testimonialsPhoto.append(avatar);

    let testimonialsData = document.createElement('div');
    testimonialsData.classList.add("testimonial-modal__data");
    testimonialsData.append(testimonialsPhoto, testimonialsNameLocation);

    let testimonialsDescription = document.createElement('div');
    testimonialsDescription.classList.add("testimonial-modal__description");
    testimonialsDescription.innerHTML = data.description;

    let testimonialsCard = document.createElement('div');
    testimonialsCard.classList.add("testimonial-modal__card");
    testimonialsCard.append(testimonialsData, testimonialsDescription);

    let testimonialsBorder = document.createElement('div');
    testimonialsBorder.classList.add("testimonial-modal__card-border");
    testimonialsBorder.append(testimonialsCard);

    let closeBtnImg = document.createElement('img');
    closeBtnImg.src = '../../assets/icons/640px/close_modal.svg'

    let testimonialsCloseBtn = document.createElement('div');
    testimonialsCloseBtn.classList.add("testimonial-modal__close-btn");
    testimonialsCloseBtn.append(closeBtnImg);

    let testimonialModal = document.createElement('div');
    testimonialModal.classList.add("testimonial-modal");
    testimonialModal.append(testimonialsCloseBtn, testimonialsBorder);

    body.append(testimonialModal);

    
    blackOut.style.display = 'block';
    blackOut.style.transform = 'translateX(0px)';
    body.style.overflow = 'hidden';
  
    //полностью очищаем память
    blackOut.addEventListener('click', function onBtnClick() {
        //   modalWindow.classList.remove('modal-window_show');
        //   setTimeout(() => {
            blackOut.style.transform = 'translateX(640px)';
            blackOut.style.display = 'none';
            body.style.overflow = 'visible';
            closeBtnImg.removeEventListener('click', onBtnClick);
            body.removeChild(testimonialModal);
        //   }, 1100)
    })
    closeBtnImg.addEventListener('click', function onBtnClick() {
    //   modalWindow.classList.remove('modal-window_show');
    //   setTimeout(() => {
        blackOut.style.transform = 'translateX(640px)';
        blackOut.style.display = 'none';
        body.style.overflow = 'visible';
        closeBtnImg.removeEventListener('click', onBtnClick);
        body.removeChild(testimonialModal);
    //   }, 1100)
    })
}

let testimonialRange = document.querySelector('input[type="range"]');
testimonialRange.addEventListener("input", rangeValue);

let offset;
window.addEventListener('resize', () => {
    if (window.screen.width <= 1598) {
        testimonialRange.max = 9;
        offset = 323;
    } else {
        testimonialRange.max = 8;
        offset = 297; 
    }
})

if (window.screen.width <= 1598) {
    testimonialRange.max = 9;
    offset = 323;
} else {
    testimonialRange.max = 8;
    offset = 297; 
}

function rangeValue() {
    
    let newValue = testimonialRange.value;
    
        testimonialsCards.style.left = -(newValue - 1) * offset + 'px';
        console.log(testimonialsCards.style.left)

    // if (newValue > currentValue) {
    //     let newPosition = currentPosition - offset;
    //     currentPosition = newPosition;
    //     testimonialsCards.style.left = currentPosition + 'px';
    // } else {
    //     let newPosition = currentPosition + offset;
    //     currentPosition = newPosition;
    //     testimonialsCards.style.left = currentPosition + 'px';
    // }
    // currentValue = newValue;
}