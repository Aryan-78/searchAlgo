async function DFSalgo( i , j ){
    if(getElementColor(getID(i,j+1))=="green"){
        await sleep(1)
        changeColor(getID(i,j+1))
        console.log(i,j+1)
        DFSalgo(i,j+1)
    }
    if(getElementColor(getID(i,j-1))=="green"){
        await sleep(1)
        changeColor(getID(i,j-1))
        console.log(i,j+1)
        DFSalgo(i,j-1)
    }
    if(getElementColor(getID(i+1,j))=="green"){
        await sleep(1)
        changeColor(getID(i+1,j))
        console.log(i,j+1)
        DFSalgo(i+1,j)
   }
    if(getElementColor(getID(i-1,j))=="green"){
        await sleep(1)
        changeColor(getID(i-1,j))
        console.log(i,j+1)
        DFSalgo(i-1,j)
   }
    return
}

async function BFSalgo(i,j){
    
}

function getElementColor(id){
    try {
        let cell = document.getElementById(id);
        return cell.style.backgroundColor;
    }catch{
        return "black";
    }
}

function getID(i , j){
    return i+" "+j
}

function changeColor(id){
    let cell = document.getElementById(id)
    cell.style.backgroundColor = "black"
}

const sleep = ( time ) => {
    return new Promise(resolve => setTimeout(resolve,time))
}