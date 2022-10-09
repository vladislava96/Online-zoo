const progress_bar_points = document.querySelectorAll('.progress-bar__point');
const progress_bar_container = document.querySelector('.progress-bar__ellipse-row');

progress_bar_container.addEventListener('click', (event) => {
    const target = event.target;

    for (let point of progress_bar_points) {
        point.classList.remove('progress-bar__point_active')
    }

    target.classList.add('progress-bar__point_active')
    let price = target.dataset.price;
    writeInInput(price);
})

const amount_input = document.querySelector('.feed-friend__input-number');

function writeInInput(price) {
    amount_input.value = price;
}

amount_input.addEventListener('input', function() {
    
    let limit = 4;

    if (this.value.length > 4) {
        this.value = 'none';
    }

    for (let point of progress_bar_points) {
        point.classList.remove('progress-bar__point_active')
    }

    for (let point of progress_bar_points) {
        if (this.value === point.dataset.price) {
            point.classList.add('progress-bar__point_active')
        }
    }
})