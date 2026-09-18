const BASE_URL = "https://pixabay.com/api/";
const keyApi = "57644876-fc689f1701711085d53cc9ddf";
const button = document.querySelector(".button");
const list = document.querySelector(".container");
const reset = document.querySelector(".reset");
let number = localStorage.getItem("page");
let page = JSON.parse(number);
let limit = 10;
function fetching() {
    fetch(`${BASE_URL}/?key=${keyApi}&page=${page}&per_page=${limit}`).then((response)=>response.json()).then((data)=>renderImage(data.hits)).catch((error)=>console.error(error));
}
function renderImage(data) {
    const imgs = data.map((image)=>{
        return `<img class="img" src="${image.previewURL}" alt="${image.name}">`;
    }).join("");
    list.innerHTML += imgs;
}
button.addEventListener("click", ()=>{
    let pagesActuali = page += 1;
    localStorage.setItem("page", pagesActuali);
    console.log(pagesActuali);
    if (page === 51) button.classList.add("transparent");
    fetching();
});
reset.addEventListener("click", ()=>{
    localStorage.clear();
    window.location.reload();
});
fetching();

//# sourceMappingURL=dz.de158e3a.js.map
