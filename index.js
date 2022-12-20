const containerEl=document.querySelector(".container");


for(let index=0; index<30;index++){
    const colorContainerEl=document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}
const colorContainerEls=document.querySelector(".color-container");

//console.log(colorContainerEls);

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode=randomColor();
        console.log(newColorCode);
    });
}

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLend= 6;
    let colorCode= "";
    for(let index=0;index<colorCodeLend;index++){
        const randomNumber=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNumber,randomNumber+1);
    }
    return colorCode;

}