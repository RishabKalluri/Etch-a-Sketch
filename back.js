const grid = document.querySelector("#grid")


//getting a size of grid doer and setting it
let length = 16 //make this a variable!!!!!!!!!!!!!!
let pixels = `${480/length}px`
document.getElementById("grid").style.setProperty('grid-template-columns', `repeat(${length}, ${pixels})`);
document.getElementById("grid").style.setProperty('grid-auto-rows', `${pixels}`);

// Loop for creating the cells
for(let i=0;i<Math.pow(length,2);i++){ 
    let cell = document.createElement("div");
    cell.classList.add("cell")
    grid.append(cell);
}
// Mouseover for filling in squares
let cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('mouseover', () =>{
        cell.classList.add("hoveredcell")
    })
    
});
//Clear board
let clear = document.querySelector('button')
clear.addEventListener('click',()=>{
    cells.forEach((cell)=>{
        cell.classList.remove('hoveredcell')
    })
})