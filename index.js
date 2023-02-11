const button = document.querySelectorAll("button");
const screen = document.querySelector(".screen");


for(const digit of button) {
    digit.addEventListener("click", ()=> {
        screen.value = digit.textContent;
    })
}