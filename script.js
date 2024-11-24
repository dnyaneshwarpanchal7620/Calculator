


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




