const grid = document.querySelector("#grid")
let black = true;
let rainbow = false;
let eraser = false;
let pickv = false;
let colors = ['redhover','orangehover','yellowhover','greenhover','bluehover','purplehover']





//getting a size of grid doer and setting it

let slider = document.querySelector("#myRange")
let length = slider.value
let pixels = `${480/length}px`
document.getElementById("grid").style.setProperty('grid-template-columns', `repeat(${length}, ${pixels})`);
document.getElementById("grid").style.setProperty('grid-auto-rows', `${pixels}`);
for(let i=0;i<Math.pow(length,2);i++){ 
    let cell = document.createElement("div");
    cell.classList.add("cell")
    grid.append(cell);
}


// Mouseover for filling in squares
let cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('mouseover', () =>{
        if(black === true){
            cell.style.backgroundColor = ''
            cell.classList = ''
            cell.classList.add("blackhover")

        }
        if(rainbow === true){
            cell.style.backgroundColor = ''
            cell.classList = ''
            cell.classList.add(`${colors[Math.floor(Math.random()*colors.length)]}`)
        }
        if(eraser===true){
            cell.style.backgroundColor = ''
            cell.classList = ''
        }
        if(pickv===true){
            cell.style.backgroundColor = ''
            cell.classList = ''
            cell.style.backgroundColor = document.querySelector('#thecolor').value;
        }
        
        
    })
    
});
///////////////////////////////////////////////////////////////////
slider.addEventListener('input', ()=>{
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let length = slider.value
let pixels = `${480/length}px`
document.getElementById("grid").style.setProperty('grid-template-columns', `repeat(${length}, ${pixels})`);
document.getElementById("grid").style.setProperty('grid-auto-rows', `${pixels}`);
for(let i=0;i<Math.pow(length,2);i++){ 
    let cell = document.createElement("div");
    cell.classList.add("cell")
    grid.append(cell);
}
// Mouseover for filling in squares
let cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('mouseover', () =>{
        if(black === true){
            cell.style.backgroundColor = ''
            cell.classList = ''
            cell.classList.add("blackhover")

        }
        if(rainbow === true){
            cell.style.backgroundColor = ''
            cell.classList = ''
            cell.classList.add(`${colors[Math.floor(Math.random()*colors.length)]}`)
        }
        if(eraser===true){
            cell.style.backgroundColor = ''
            cell.classList = ''
        }
        if(pickv===true){
            cell.style.backgroundColor = ''
            cell.classList = ''
            cell.style.backgroundColor = document.querySelector('#thecolor').value;
        }
        
        
    })
    
});
let clear = document.querySelector('#clear')

clear.addEventListener('click',()=>{
    
    cells.forEach((cell)=>{
        cell.style.backgroundColor = ''

        cell.classList = ''
    })
    rainbow = false
    black = true
    pickv = false
    eraser = false
})


})/////////////////////////


//toggle rainbow or pick or black or eraser
let rainbowd = document.querySelector('#rainbow')
rainbowd.addEventListener('click',()=>{
    rainbow = true
    black = false
    pickv = false
    eraser = false
})

let blackd = document.querySelector('#black')
blackd.addEventListener('click',()=>{
    
    rainbow = false
    black = true
    pickv = false
    eraser = false
})

let eraserd = document.querySelector('#eraser')
eraserd.addEventListener('click',()=>{

    rainbow = false
    black = false
    pickv = false
    eraser = true
})

let pick = document.querySelector('#pick')
pick.addEventListener('click',()=>{
    rainbow = false
    black = false
    pickv = true
    eraser = false
})
//Clear board
let clear = document.querySelector('#clear')

clear.addEventListener('click',()=>{
    
    cells.forEach((cell)=>{
        cell.style.backgroundColor = ''
        cell.classList = ''
    })
    rainbow = false
    black = true
    pickv = false
    eraser = false
})

//Format everything :(
//maybe add fade in to the mouseover?
//format evverything :(