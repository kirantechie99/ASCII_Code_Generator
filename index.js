let ascii = document.getElementsByClassName("ascii")[0];
let alpha = document.getElementsByClassName("alpha")[0];
document.addEventListener("keypress", function(e){
    ascii.textContent = e.keyCode;
    alpha.textContent = " = " +e.key;
})