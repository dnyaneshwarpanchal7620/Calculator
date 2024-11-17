


function dm(abc){
    document.getElementById("display").value +=abc;
}
function calci(){
    let x=document.getElementById("display").value
    let y =eval(x)
    document.getElementById("display").value=y;
}
function clear(){
    document.getElementById("display").value =" ";
}



// let btn = document.querySelectorAll("button")

// btn.addEventListener("click",()=>{
//     document.getElementById("E").innerHTML +=e
// })

// function xyz(e){
//     let btn = document.getElementById("display")
//     btn.addEventListener("click",()=>{
//         document.getElementById("E").innerHTML +=e
    
// })
// }

