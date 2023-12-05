const matrix = document.querySelector(".matrix");
// A render() eljárás készíti el a matrix-osztályú keretben a field osztályú négyzeteket.
function render(){
    matrix.innerHTML = "";
    for (let i = 0; i < 25; i++){
        const field = document.createElement("div");
        // Eseményfigyelőt kötünk minden egyes új négyzetre.
        // Az Eseményfigyelő a click eseményre meghívja a coloring nevű színező eljárást.
        //Fontos! Itt csak az eljárás neve szerepel, tehát ez nem eljáráshívás, hanem callback
        // eljárás, mert majd az esemény bekövetkeztével az eseménykezelő hívja meg.
        field.addEventListener("click", coloring)
        field.classList.add("field");
        matrix.appendChild(field)
    }
}
// 0 és 255 közötti véletlen számot készítő függvény:
function randomColor(){
    return Math.floor(Math.random()*254+1);
}

// Színező eljárás. Fontos! Az eseménykezelő (addEventListener) metódus automatikusan
// átadja a meghívandó callback eljárásnak magát az eseményt, amelyet az event változóban találunk meg.
function coloring(event){
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    event.target.innerText = `${r},${g},${b}`;
}

// A gombot összekötjük egy névtelen eljárással, amely eljárást most itt helyben deklarálunk fatArrow
// segítségével. Ez a névtelen eljárás ezt csinálja:
// A fields állandóba teszi az összes field osztályú elemet -> nodeList
// A forEach metódus révén, a gomb változóban sorban végig lépked a filed-osztályú elemeken, és
// ezeken az elemeken módosítja a háttérszínt (css-feladat), és az elemek tartalmát (html-feladat).  
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const fields = document.querySelectorAll(".field");
    fields.forEach(gomb => {
        gomb.style.backgroundColor= "";
        gomb.innerText = "";
    })
})

render();