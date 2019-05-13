var bw = 600;
var bh = 600;
var p = 10;
var size = 60;
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

var canvas = document.getElementById("canvas");
var input = document.getElementById("size");
var context = canvas.getContext("2d");

// hit enter to activate button
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("myBtn").click();
    }
});


//https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element
// canvas.addEventListener("click", function(event) {   
//     returnClickedPoint(canvas, event);
// }, false);

canvas.addEventListener("mousedown", function(event) {   
    returnClickedPoint(canvas, event);
}, false);

canvas.addEventListener("mousedown", function (event) {
    console.log("mouse is down");

    canvas.addEventListener("mousemove", addMouseOver);

    document.addEventListener("mouseup", addMouseUp);
});

function addMouseOver(event){
    console.log("mouse is moving");
    returnClickedPoint(canvas, event);
}
function addMouseUp(event){
    console.log("mouse is not down or moving");
    canvas.removeEventListener("mousemove", addMouseOver);
    document.removeEventListener("mousedown", addMouseUp);
}

// draws the checkboard with variable sizes
function drawBoard(sizeX){
    console.log("size" + sizeX);
    console.log("context" + context);
    for (var x = 0; x <= bw; x += sizeX) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += sizeX) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "black";
    context.stroke();
}

// called in html: onclick="reDraw()"
function reDraw(){
    clearCanvas(canvas);
    size = input.value;
    drawBoard(parseInt(size));
}

function returnClickedPoint(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left - p;
    var y = event.clientY - rect.top  - p;
    console.log("x: " + x + " y: " + y);

    colorSquare(returnClickedSquareX(x, size), returnClickedSquareY(y, size));
}
function returnClickedSquareX(x, sizeX) {
    return Math.floor(x/sizeX)+1;
}
function returnClickedSquareY(y, sizeY) {
    return Math.floor(y/sizeY)+1;
}

function colorSquare(x, y) {
    console.log("colorSquare: test");
    context.fillRect( p + size*(x-1),  p + size*(y-1), size, size);
    context.stroke();
}

// returns blank Canvas
function clearCanvas(cnv) {
    var ctx = cnv.getContext('2d'); // gets reference to canvas context
    ctx.beginPath();                // clear existing drawing paths
    ctx.save();                     // store the current transformation matrix
  
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv.width, cnv.height);
  
    ctx.restore();                  // restore the transform
  }

drawBoard(size);


