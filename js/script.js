let userInput = document.getElementById("size");

function createGrid(gridsize){
    const workSpace = document.getElementById('display');
    
    workSpace.innerHTML ="";
    workSpace.style.cssText = 'grid-template-columns: repeat('+ gridsize +',1fr); grid-template-rows: repeat('+ gridsize +',1fr);'

    for(let i=0;i<gridsize;i++){
        for(let j=0;j<gridsize;j++){
            const divItems = document.createElement('div');
            divItems.setAttribute("id",""+i+" "+j+"");
            divItems.style.cssText = 'background-color: green;'
            divItems.classList.add("grid-items")
            workSpace.appendChild(divItems);
        }
    }
}

userInput.addEventListener('input', function() {
    let gridsize = userInput.value;
    createGrid(gridsize);
})

async function fun(){
    changeColor(getID(3,3))
    await sleep(1000)
    DFSalgo(25,25)
}