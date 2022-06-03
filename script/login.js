
function fazerLogin(){
    if(document.getElementById("senha").value != "12345"){
        document.getElementById("senha-incorreta").style.color = "rgb(255, 92, 92)";
        document.getElementById("senha-incorreta").style.visibility = "visible";
    }
}
function correcao(){
    document.getElementById("senha").style.color = "#474747";
}

function mascara(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
}

