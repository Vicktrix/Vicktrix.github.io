const container = document.getElementById('hexagons');
//const containerWidth = 3000;
const containerWidth = 2000;
const containerHeight = 1400;

let row = 0, col = 0, x = 0, y = 0, index = 0;
let hexagonSide;
let gap;
let start;
let resizeParam;
let hexagonSize;

const initLarge = () => {
    hexagonSide = 100;
    start = 64;
    gap = 8;
    resizeParam = 100;
    hexagonSize = 'hexagonLarge';
};
const initMiddle = () => {
    hexagonSide = 55;
    start = 34;
    gap = 4;
    resizeParam = 100;
    hexagonSize = 'hexagonMiddle';
};
const initSmall = () => {
    hexagonSide = 25;
    start = 15;
    gap = 2;
    resizeParam = 200;
    hexagonSize = 'hexagonSmall';
};
const initXSmall = () => {
    hexagonSide = 20;
    start = 15;
    gap = 2;
    resizeParam = 250;
    hexagonSize = 'hexagonSmall';
};

//initLarge();
//initMiddle();
initSmall();
//initXSmall();

// ------------------------ Generate hexagon ---------------------------

const hexagonHeight = 1.75 * hexagonSide;
const hexagonWidth = 2 * hexagonSide;

const generateByMe = () => {
    while (y < containerHeight) {
            x = row % 2 === 0 ? 0 : hexagonSide + start;
            col = 0;
            while (x < containerWidth) {
                fillAndAppend(x,y,index);
                index++;
                col++;
                x += hexagonWidth + start*2;
            }
            y += (hexagonHeight * 0.5) + gap;
            row++;
        }
};

// ------------------------ Fill hexagon ---------------------------

const fillAndAppend = (x,y,i) => {
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');
        hexagon.classList.add(hexagonSize);
        hexagon.style.left = `${x}px`;
        hexagon.style.top = `${y}px`;
        hexagon.style.width = `${hexagonWidth}px`;
        hexagon.style.height = `${hexagonHeight}px`;
//        if(i%2 === 0) hexagon.classList.add('hex-color-1');
//        else hexagon.classList.add('hex-color-2');
        hexagon.innerText = i;
        container.appendChild(hexagon);
};

generateByMe();

// --------------------- Scrolling --------------------------

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
//    container.style.transform = `translate(-50%, calc(-20% + ${scrollY / 2}px))`;
//    container.style.transform = `translate(0, calc(-3% + ${scrollY / 2}px))`;
    container.style.transform = `translate(0, calc(${scrollY / 2}px))`;
//    resize(scrollY);
});

// --------------- Resize (Optionaly from scroll) -------------------------------

const resize = (scrollY) => {
//    let newSide = Math.max(1, hexagonSide - Math.floor(scrollY / 100));
    let newSide = Math.max(1, hexagonSide - Math.floor(scrollY / resizeParam));
    const hexagons = document.querySelectorAll('.hexagon');
    hexagons.forEach(hexagon => {
        hexagon.style.width = `${newSide * 2}px`;
        hexagon.style.height = `${newSide * 1.75}px`;
    });
};

// --------------- Init background --------------------------------------------
const initBackGround = () => {
    const body = document.getElementById("back-groung");
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    div1.classList.add('back-groung-1');
    div2.classList.add('back-groung-2');
    div3.classList.add('back-groung-3');
    div4.classList.add('back-groung-4');
    body.appendChild(div1);
    body.appendChild(div2);
    body.appendChild(div3);
    body.appendChild(div4);
};
initBackGround();