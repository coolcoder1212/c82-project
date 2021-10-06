mouseEvent = "empty";
console.log(mouseEvent);
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 5;

document.getElementById("color_input").value = color;
document.getElementById("width_input").value = width_of_line;
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", myMouseDown);
//myMouseDown is function declared by us to tell the computer what to do when mousedown event occurs

function myMouseDown(e) {
    color = document.getElementById("color_input").value;
    console.log(color);
    mouse_x = e.clientX -canvas.offsetLeft;
    mouse_y = e.clientY -canvas.offsetTop;
    circle(mouse_x, mouse_y);
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouse_leave";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouse_up";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouse_down") {
        console.log("mousemove + mousedown");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearcanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}