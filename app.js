const topTexts = document.getElementsByClassName("top-text");
const hideTexts = document.getElementsByClassName("hide-text");


for (let index = 0; index < topTexts.length; index++) {
    topTexts[index].addEventListener("click", () => {
        topTexts[index].classList.toggle("bold");
        hideTexts[index].classList.toggle("hidden");
        const arrowUp = topTexts[index].nextElementSibling;
        arrowUp.classList.toggle("rotate");
    });
}