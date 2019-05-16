// Variable-names are top down 
// html is in front of names, when the varibale/constant can be seen on the website ||| if it is behind the scenes, then no html
// html does not mean the value can be changed from the site, only seen. that way it is easier to find and remember (I hope -> maybe read up on naming conventions?)

// VARIABLES 
// ADDING EVENT LISTER
// EVENT LISTER FUNCTIONS
// FUNCTIONS that can affekt LINES of the CANVAS GRID
// FUNCTIONS that can COLOR the CANVAS GRID
// CLASSES and their Methods
// FUNCTIONS that give Information
// CODE ON STARTUP

// **********
// VARIABLES 
// ********** 
var htmlCanvasGridWidth = 600;
var htmlCanvasGridHeight = 600;
var htmlCanvasGridMargin = 10;
var htmlCanvasGridSquareSize = 60;
var htmlCanvasPaintSquareSize = 60;

var canvas = document.getElementById("canvas");
var input = document.getElementById("htmlCanvasGridSquareSize");
var paintSizeHTML = document.getElementById("paintSizeHTML");
var btnManual = document.getElementById("squareSizeBtn");

var context = canvas.getContext("2d");


// *******************
// ADDING EVENT LISTER
// ******************* 

// hit enter to activate button
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     btnManual.click();
    }
});

canvas.addEventListener("mousedown", function(event) {   
    colorPointGiven(returnClickedPoint(canvas, event));
}, false);

canvas.addEventListener("mousedown", function (event) {
    console.log("mouse is down");
    canvas.addEventListener("mousemove", addMouseOver);
    document.addEventListener("mouseup", addMouseUp);
});

// **********************
// EVENT LISTER FUNCTIONS
// ********************** 
function addMouseOver(event){
    console.log("mouse is moving");
    colorPointGiven(returnClickedPoint(canvas, event));
}
function addMouseUp(event){
    console.log("mouse is not down or moving");
    canvas.removeEventListener("mousemove", addMouseOver);
    document.removeEventListener("mousedown", addMouseUp);
}

// **************************************************
// FUNCTIONS that can affekt LINES of the CANVAS GRID
// **************************************************
// draws the checkboard with variable htmlCanvasGridSquareSize
function drawBoard(sizeX){
    console.log("htmlCanvasGridSquareSize" + sizeX);
    console.log("context" + context);
    for (var x = 0; x <= htmlCanvasGridWidth; x += sizeX) {
        context.moveTo(0.5 + x + htmlCanvasGridMargin, htmlCanvasGridMargin);
        context.lineTo(0.5 + x + htmlCanvasGridMargin, htmlCanvasGridHeight + htmlCanvasGridMargin);
    }

    for (var x = 0; x <= htmlCanvasGridHeight; x += sizeX) {
        context.moveTo(htmlCanvasGridMargin, 0.5 + x + htmlCanvasGridMargin);
        context.lineTo(htmlCanvasGridWidth + htmlCanvasGridMargin, 0.5 + x + htmlCanvasGridMargin);
    }

    context.strokeStyle = "black";
    context.stroke();
}

// called in html: onclick="reDraw()"
function reDrawInput(){
    setGridSize(input.value);
}

function reDraw(){
    clearCanvas(canvas);
    drawBoard(parseInt(htmlCanvasGridSquareSize));
}

function setGridSize(sqSize){
    htmlCanvasGridSquareSize = sqSize;
    setPaintSize(sqSize);
    reDraw();
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

// ****************************************
// FUNCTIONS that can COLOR the CANVAS GRID
// ****************************************
function colorPointGiven(Point) {
    colorSquare(returnClickedSquareX(Point.x, htmlCanvasGridSquareSize), returnClickedSquareY(Point.y, htmlCanvasGridSquareSize));
}

function setPaintSize(sqSize){
    htmlCanvasPaintSquareSize = sqSize;
    paintSizeHTML.innerHTML = sqSize;
}

function colorSquare(x, y) {
    context.fillRect(   htmlCanvasGridMargin + htmlCanvasGridSquareSize*(x-1),      // From 1
                        htmlCanvasGridMargin + htmlCanvasGridSquareSize*(y-1),      // From 2
                        htmlCanvasPaintSquareSize,                                  // To 1
                        htmlCanvasPaintSquareSize);                                 // To 2
    context.stroke();
}
// **************************
// CLASSES and their Methods
// **************************
// Define a class like this
function Point(x, y) {
    // Add object properties like this
    this.x = x;
    this.y = y;
}
// Add methods like this.  All Point objects will be able to invoke this
Point.prototype.getPoint = function(){
    console.log("this.x: " + this.x + " this.y: " + this.y);
};

// *******************************
// FUNCTIONS that give Information
// *******************************
function returnClickedPoint(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left - htmlCanvasGridMargin;
    var y = event.clientY - rect.top  - htmlCanvasGridMargin;
    var canvasPoint = new Point(x, y);
    return canvasPoint;
}

function returnClickedSquareX(x, sizeX) {
    return Math.floor(x/sizeX)+1;
}
function returnClickedSquareY(y, sizeY) {
    return Math.floor(y/sizeY)+1;
}

// ***************
// CODE ON STARTUP
// ***************

drawBoard(htmlCanvasGridSquareSize);







// var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext("2d"),
//     drawCanvas = document.getElementById("drawCanvas"),
//     drawCtx = drawCanvas.getContext("2d"),
//     painting = false,
//     lastX = 0,
//     lastY = 0,
//     curX = 0,
//     curY = 0,
//     startX = 0,
//     startY = 0,
//     lineThickness = 1;

// canvas.width = canvas.height = 600;

// drawCanvas.width = drawCanvas.height = 600;

// drawCanvas.onmousedown = function(e) {
//     startX = e.pageX - this.offsetLeft;
//     startY = e.pageY - this.offsetTop;
//     painting = true;

// };

// drawCanvas.onmouseup = function(e){
//     painting = false;

//     ctx.strokeStyle = "#000";
//     ctx.beginPath();
//     ctx.moveTo(startX, startY);
//     ctx.lineTo(lastX, lastY);
//     ctx.stroke();

//     drawCtx.clearRect(0, 0, 600, 600);
// }

// drawCanvas.onmouseclick = function(e) {

//     startX = e.pageX - this.offsetLeft;
//     startY = e.pageY - this.offsetTop;

//     painting = true;
// };


// drawCanvas.onmousemove = function(e) {
//     if(painting){
//         lastX = e.pageX - this.offsetLeft;
//         lastY = e.pageY - this.offsetTop;
//         drawCtx.clearRect(0,0,600,600);
//         drawCtx.beginPath();
//         drawCtx.moveTo(startX ,startY );
//         drawCtx.lineTo(lastX, lastY);
//         drawCtx.stroke();
//     }
// }
