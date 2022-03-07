const agree = document.querySelector('.yes');
const disagree = document.querySelector('.no');
const agreeSec = document.querySelector('.secondary-popUp-agree');
const disagreeSec = document.querySelector('.secondary-popUp-disagree');
const wrong1 = document.querySelector('.times1');
const wrong2 = document.querySelector('.times2');

agree.addEventListener('click', () => {
    agreeSec.classList.add('appear');
});
wrong1.addEventListener('click', () => {
    agreeSec.classList.remove('appear');
});
disagree.addEventListener('click', () => {
    disagreeSec.classList.add('visible');
});
wrong2.addEventListener('click', () => {
    disagreeSec.classList.remove('visible');
});