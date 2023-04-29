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

let activeSlide = 0;

function changeSlide(slideNumber) {
    const slideData = projects[slideNumber];

    imageElement.src = slideData.img;
    cityElement.innerHTML = slideData.city;
    areaElement.textContent = slideData.area;
    timeElement.textContent = slideData.time;
    costElement.textContent = slideData.cost;

    addListItemActiveClass(slideNumber);
    setActivePoint(slideNumber);

    console.log('activeSlide: ' + activeSlide + ' -> ' + slideNumber);
    activeSlide = slideNumber;
}

function addListItemActiveClass (number) {
    links[activeSlide].classList.remove("projects-navigation_item-active");
    links[number].classList.add("projects-navigation_item-active");
}

function setActivePoint(number) {
    pointsButtons[activeSlide].firstChild.src="./images/icons/gray-point.svg";
    pointsButtons[number].firstChild.src="./images/icons/white-point.svg";
}

function setClickListener (array) {
    array.forEach((element, index) => {
        element.addEventListener('click', () => changeSlide(index));
    });
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

console.log(buttons[0].innerHTML)
console.log(buttons[4].innerHTML)

console.log('--')
console.log(buttons[1].innerHTML)
console.log(buttons[2].innerHTML)
console.log(buttons[3].innerHTML)