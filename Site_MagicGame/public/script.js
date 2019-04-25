var bw = 600;
var bh = 600;
var p = 10;
var size = 60;
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

var canvas = document.getElementById("canvas");
var input = document.getElementById("size");
var context = canvas.getContext("2d");

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
function reDraw(){
    clearCanvas(canvas);
    drawBoard(parseInt(input.value));
}

function clearCanvas(cnv) {
    var ctx = cnv.getContext('2d');     // gets reference to canvas context
    ctx.beginPath();    // clear existing drawing paths
    ctx.save();         // store the current transformation matrix
  
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv.width, cnv.height);
  
    ctx.restore();        // restore the transform
  }

drawBoard(size);


