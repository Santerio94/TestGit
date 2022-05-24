function generateNumber() {
    const number = Math.round(Math.random() * 100);
    document.getElementById('text').textContent = number;
}
function hello() {
    console.log("Hello");
}