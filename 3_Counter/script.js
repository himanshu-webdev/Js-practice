let count = 0;

function increase() {
    count++;
    updateCount();
}

function decrease() {
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}

function updateCount() {
    document.getElementById('count').textContent = count;
}