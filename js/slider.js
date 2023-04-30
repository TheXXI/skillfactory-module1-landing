const projects = [
    {
        'img': './images/sliders/first-project.png',
        'city': `Rostov-on-Don<br>LCD admiral`,
        'area': `81 m2`,
        'time': `3.5 months`,
        'cost': `Upon request`
    },
    {
        'img': './images/sliders/second-project.png',
        'city': `Sochi<br>Thieves`,
        'area': `105 m2`,
        'time': `4 months`,
        'cost': `Upon request`
    },
    {
        'img': './images/sliders/third-project.png',
        'city': `Rostov-on-Don<br>Patriotic`,
        'area': `93 m2`,
        'time': `3 months`,
        'cost': `Upon request`
    }
]

const imageElement = document.getElementById('projects-image');
const cityElement = document.getElementById('projects-city');
const areaElement = document.getElementById('projects-area');
const timeElement = document.getElementById('projects-time');
const costElement = document.getElementById('projects-cost');

let activeSlideNum = 0;

function changeSlide(slideNumber) {
    const slideData = projects[slideNumber];

    imageElement.src = slideData.img;
    cityElement.innerHTML = slideData.city;
    areaElement.textContent = slideData.area;
    timeElement.textContent = slideData.time;
    costElement.textContent = slideData.cost;

    addListItemActiveClass(slideNumber);
    setActivePoint(slideNumber);

    activeSlideNum = slideNumber;
}

function addListItemActiveClass (number) {
    links[activeSlideNum].classList.remove("projects-navigation_item-active");
    links[number].classList.add("projects-navigation_item-active");
}

function setActivePoint(number) {
    pointsButtons[activeSlideNum].firstChild.src="./images/icons/gray-point.svg";
    pointsButtons[number].firstChild.src="./images/icons/white-point.svg";
}

function setClickListener (array) {
    array.forEach((element, index) => {
        element.addEventListener('click', () => changeSlide(index));
    });
}

function setPrevSlide () {
    let prevNum = activeSlideNum - 1;
    if (prevNum < 0) prevNum = 2;
    changeSlide(prevNum);
    activeSlideNum = prevNum;
}

function setNextSlide () {
    let nextNum = activeSlideNum + 1;
    if (nextNum > 2) nextNum = 0;
    changeSlide(nextNum);
    activeSlideNum = nextNum;
}

const links = document.querySelectorAll('.projects-navigation_item');
const buttons = document.querySelectorAll('.projects-navigation-panel_item');

const pointsButtons = [
    buttons[1],
    buttons[2],
    buttons[3]
]

setClickListener(links);
setClickListener(pointsButtons);

buttons[0].addEventListener('click', setPrevSlide);
buttons[4].addEventListener('click', setNextSlide);

/* mobile */

const mobileButtons = document.querySelectorAll('.slider-block-navigation-button');

mobileButtons[0].addEventListener('click', setPrevSlide);
mobileButtons[1].addEventListener('click', setNextSlide);