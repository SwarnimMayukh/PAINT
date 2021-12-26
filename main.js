var mouseE ="empty";
var last_position_x,last_position_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color ="blue";
width = 1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
color = document.getElementById("color").value;
width = document.getElementById("width-of-line").value;
mouseE ="mouseDown";
} 
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if(mouseE=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last poisition x and y coordinates =");
        console.log("x = "+last_position_x+"y ="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("current poisition x and y coordinates =");
        console.log("x = "+current_position_of_mouse_x+"y ="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_x = current_position_of_mouse_x;
    last_position_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseE = "mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseE = "mouseleave";
}
function clear_area() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
