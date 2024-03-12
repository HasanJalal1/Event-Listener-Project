const input_box = document.getElementById("input_box");
const box = document.getElementById("box");

input_box.addEventListener("keypress",function(e){
    box.innerText="You have Pressed "+ e.key
})