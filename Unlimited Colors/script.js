const body = document.body;
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');

const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 'a', 'b', 'c', 'd', 'e', 'f'];

let changeBodyColorIntervalId = null;

// #000000 -> 6digits
const changeBodyColor = () => {
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 14);
        color += hexDigits[randomIndex];
    }

    body.style.backgroundColor = `${color}`;
};

startBtn.addEventListener('click', function(e) {
    // This check is important that after clicking start btn once then on second and there after clicks we dont set the intervalid and call setinterval.
    if(!changeBodyColorIntervalId) {
        changeBodyColorIntervalId = setInterval(changeBodyColor, 1000);
    }
});

stopBtn.addEventListener('click', function(e) {
    clearInterval(changeBodyColorIntervalId);
    changeBodyColorIntervalId = null;
});