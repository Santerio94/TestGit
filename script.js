function generateNumber() {
    const number = Math.random()*100;
    document.getElementById('text').textContent = number;
}