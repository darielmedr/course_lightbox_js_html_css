const images = document.querySelectorAll('.gallery-image');
const activeImage = document.querySelector('.active-img');
const lightbox = document.querySelector('.lightbox');
const previousImageBtn = document.getElementById('previous-slide');
const nextImageBtn = document.getElementById('next-slide');

let currentImageIndex = 0;

const getCurrentImageIndex = (elem) => {
    const siblingsArray = [...elem.parentNode.children];
    const elementIndex = siblingsArray.indexOf(elem);
    return elementIndex;
};

const getCurrentImageSrc = (index) => {
    const image = images.item(index);
    const imageSrc = image.getAttribute('src');
    return imageSrc;
};

const getNextImageIndex = (index) => {
    const lenght = images.length - 1;
    if (index === lenght) {
        return 0;                       // first element
    }
    else return ++index;
}

const getPreviousImageIndex = (index) => {
    const lenght = images.length - 1;
    if (index === 0) {
        return lenght;                   // last element
    }
    else return --index;
}

images.forEach(image => {
    image.addEventListener('click', () => {
        currentImageIndex = getCurrentImageIndex(image);

        const imageSrc = image.getAttribute('src');
        activeImage.setAttribute('src', imageSrc);

        lightbox.classList.add('show-lightbox');
        activeImage.classList.add('show-image');
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target != activeImage && e.target != nextImageBtn && e.target != previousImageBtn) {
        lightbox.classList.remove('show-lightbox');
        activeImage.classList.remove('show-image');
    }
});

previousImageBtn.addEventListener('click', () => {
    currentImageIndex = getPreviousImageIndex(currentImageIndex);
    const imageSrc = getCurrentImageSrc(currentImageIndex);
    activeImage.setAttribute('src', imageSrc);
});

nextImageBtn.addEventListener('click', () => {
    currentImageIndex = getNextImageIndex(currentImageIndex);
    const imageSrc = getCurrentImageSrc(currentImageIndex);
    activeImage.setAttribute('src', imageSrc);
});