const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
var upleft = new Image();
var upright = new Image();
var downleft = new Image();
var downright = new Image();

var ori = new Image();
var bg = new Image();
upleft.src = 'img/a/ul.png'
upright.src = 'img/a/ur.png'
downleft.src = 'img/a/dl.png'
downright.src = 'img/a/dr.png'

ori.src = 'img/sun/ori.png'

bg.src = 'img/a/bg.png'



var w = 451; // this will be 300
var h = 228;

canvas.width = bg.naturalWidth;
canvas.height = bg.naturalHeight;

var oripx = 225;
var oripy = 133;

var px = 225; //px = 400 ; py = 300
var py = 133;

var pxv = 0;
var pyv = 0;
var pxa = 0;
var pya = 0;

var sx = 156;
var sy = 745;


function move() {
    requestAnimationFrame(move);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(bg, 0, 0, bg.naturalWidth, bg.naturalHeight);

    ctx.drawImage(upleft, sx + 0, sy + 0, px, py);
    ctx.drawImage(upright, sx + px, sy + 0, w - px, py);
    ctx.drawImage(downleft, sx + 0, sy + py, px, h - py);
    ctx.drawImage(downright, sx + px, sy + py, w - px, h - py);

    pxa = -0.1 * (px - oripx); //쿠묜 뻘러잠
    pya = -0.1 * (py - oripy);

    pxv += pxa;
    pyv += pya;

    pxv *= 0.8; //크면 더튕김
    pyv *= 0.9; // Adjust this value (e.g., 0.99) to increase or decrease damping

    px += pxv;
    py += pyv;
}

move();


var mdx;
var mdy;


document.addEventListener('mousedown', (e) => {
    mdx = e.screenX;
    mdy = e.screenY;
    console.log(mdx);
    console.log(mdy);
});


document.addEventListener('mouseup', (e) => {
    mdx = e.screenX - mdx;
    mdy = e.screenY - mdy;
    console.log(mdx);
    console.log(mdy);
    pxv += mdx / 10;
    pyv += mdy / 10;
});