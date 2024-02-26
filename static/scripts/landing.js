/*const featureItems = document.querySelectorAll('nameinterval');
let currentIndex = 0;
let timer;

function moveItem() {
    featureItems[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % featureItems.length;
    featureItems[currentIndex].classList.remove('hidden');
}
setInterval(moveItem, 2000);

const featuresDiv = document.querySelector('.feature1');

featuresDiv.addEventListener('mouseover', () => {
    clearInterval(timer);
});
featuresDiv.addEventListener('mouseout', () => {
    timer = setInterval(moveItem, 2000);
});*/


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById("actualname");
    const text = "I'm David Njagi, a Junior fullstack developer. Welcome to my portfolio. Thank you.";
    let index = 0;

    function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
    } else {
        setTimeout(() => {
            textElement.textContent = "";
            index = 0;
        }, 1000);
    }

    setTimeout(typeWriter, 240);
    }
    typeWriter();
});