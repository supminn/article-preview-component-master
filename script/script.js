const btnClick = document.querySelector("#icon-share");
const shareContainer = document.querySelector(".click-data");
const btnActive = document.querySelector("#icon-share-active");
const btnToggle = document.querySelector(".icon-btn");
const btnActiveToggle = document.querySelector(".icon-btn-active");

btnClick.addEventListener("click",() => {
    shareContainer.classList.remove("hidden");
    btnToggle.classList.add("hidden");
    btnActiveToggle.classList.remove("hidden");
})

btnActive.addEventListener("click",() => {
    shareContainer.classList.add("hidden");
})

btnActiveToggle.addEventListener("click",() => {
    shareContainer.classList.add("hidden");
    btnToggle.classList.remove("hidden");
    btnActiveToggle.classList.add("hidden");
})