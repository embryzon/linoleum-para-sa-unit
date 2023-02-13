//ALL Units are in inches for now
var area = 0, 
    h = 0,
    w = 0
    inches = false;

//BEDROOM
const bedroom = document.querySelector('.bedroom');

h = bedroom.offsetHeight;
w = bedroom.offsetWidth;

area += (h*w);

//DOORWAY
const doorway = document.querySelector('.doorway');
var temp = document.querySelector('.door-1').offsetHeight;

h = doorway.offsetHeight - temp;

temp = document.querySelector('.door-3').offsetHeight;

h -= temp;

w = doorway.offsetWidth;

area += (h*w);

//LIVING ROOM
const living = document.querySelector('.living');

h = living.offsetHeight;
w = living.offsetWidth;

area += (h*w);

//DINING ROOM
const dining = document.querySelector('.dining');
temp = document.querySelector('.dining-2').offsetHeight;

h = dining.offsetHeight - temp;

w = dining.offsetWidth;

area += (h*w);

window.onload = function () {
    // computeArea();
    displayArea();
}

function displayArea(){
    if (!inches) {
        const estimatedArea = document. querySelector('.title');
        estimatedArea.innerHTML = ``;
        estimatedArea.innerHTML += `${convertToinches(area)} square meters`;
    }

    else {
        const estimatedArea = document. querySelector('.title');
        estimatedArea.innerHTML = ``;
        estimatedArea.innerHTML += `${area} square inches`;
    }

    function convertToinches(x) {
        x *= 0.00065;
        return x;
    }

}

//toggle the units

const toggleBtn = document.querySelector('.toggle-button');

toggleBtn.addEventListener('click', (e) => {
    inches = !inches;
    if (inches) {
        toggleBtn.innerHTML = `Convert to meters`;
    }
    if (!inches) {
        toggleBtn.innerHTML = `Convert to inches`;
    }
    displayArea();
} )