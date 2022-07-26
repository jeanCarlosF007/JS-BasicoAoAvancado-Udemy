
function getTimeBySeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

let seconds = 0;
let timer;

function clockStart() {
    timer = setInterval(function () {
        seconds++;
        clock.innerHTML = getTimeBySeconds(seconds);
    }, 1000);
}

function startCounting() {
    clearInterval(timer);
    clockStart();
    clock.classList.remove('paused');
}

function pauseCounting() {
    clearInterval(timer);
    clock.classList.add('paused');
}

function nullCounting() {
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = '00:00:00';
    clock.classList.remove('paused');
}