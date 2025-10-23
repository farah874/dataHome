const images = 
[
'red.jpg',
 'al.jpg',
 'cal.webp'
];
let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
// Function to update the displayed image
function updateImage() {
 sliderImage.src = images[currentIndex];
}


// Show the previous image
prevBtn.addEventListener('click', () => {
 currentIndex = (currentIndex - 1 + images.length) % images.length;
 updateImage();
});
// Show the next image
nextBtn.addEventListener('click', () => {
 currentIndex = (currentIndex + 1) % images.length;
 updateImage();
});
