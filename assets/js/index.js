// Get the date-time container
let clock = document.querySelector('#date-time');

// Inject the time in the UI
const renderTime = () => {
    const time = new Date();
    clock.textContent = time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}) + "\r\n" + time.toLocaleString('en-NG', {year: 'numeric', month: 'numeric', day: 'numeric'});
    clock.title = time.toLocaleString('en-NG', {year: 'numeric', month: 'long', day: 'numeric' }) + "\r\n" + time.toLocaleString('en-NG', {weekday: 'long' });
};

// Render the time on load
renderTime();

// Update the time every second
setInterval(renderTime, 1000);


// --------------------------------*
let startMenu =  document.getElementById('start-menu');

// Toggle Menu

const toggleMenu = () => {
    startMenu.classList.contains("active") ?
        startMenu.classList.remove("active") : startMenu.classList.add("active");
}

// Close Menu
const closeMenu = () => {
    startMenu.classList.remove("active");
}

// Open Window
const openWindow = win => {
    window.open("file:///C:/Users/USER/Pictures/s1.PNG");
    const newWindow = window.open('https://www.google.com','newWindow', "menubar=1, toolbar=1, status=1, resizable=1, scrollbar=1");
}

// Catch Esc key
window.onkeydown = e => {
    if (e.keyCode === 27) {
        e.preventDefault();
        closeMenu();
    }
}

// Catch windows key [CTRL + SPACE]
window.onkeyup = e => {
    if (e.keyCode === 32 && e.ctrlKey === true) {
        e.preventDefault();
        toggleMenu();
    }
}

let elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

window.ondblclick = () => openFullscreen();