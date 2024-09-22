let butterflyAnimation;

function narrateText(elementId) {
    const text = document.getElementById(elementId).innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

function showVideo(id) {
    const videoElement = document.getElementById(id);
    videoElement.style.display = 'block';
}

function animateButterfly() {
    const butterfly = document.getElementById('butterfly');
    butterfly.style.display = 'block';


    butterfly.style.animation = 'none';
    void butterfly.offsetWidth;
    butterfly.style.animation = 'fly 10s linear infinite';

    butterflyAnimation = setInterval(() => {
    }, 100);
}

function stopButterfly() {
    const butterfly = document.getElementById('butterfly');
    butterfly.style.display = 'none';
    clearInterval(butterflyAnimation);
}
