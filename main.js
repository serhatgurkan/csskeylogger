var input = document.querySelector("input");
input.addEventListener("keyup", function(e){
    input.setAttribute("value", input.value);
});
