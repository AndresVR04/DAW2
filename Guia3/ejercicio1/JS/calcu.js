var opA=0, opB=0, resul=0;
var aux=1;
function num(a){
    if(opA==0 || aux==1){
        entrada.innerHTML = a;
        opA = a; 
    }else{
       entrada.innerHTML += a;

    }
    aux = 0;

}

function inic(){

}

window.onload = inic();