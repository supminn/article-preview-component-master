const btnClick = document.querySelector("#icon-share");
const shareContainer = document.querySelector(".click-data");
const btnActive = document.querySelector("#icon-share-active");

btnClick.addEventListener("click",() => {
    shareContainer.classList.remove("hidden");
})

btnActive.addEventListener("click",() => {
    shareContainer.classList.add("hidden");
})