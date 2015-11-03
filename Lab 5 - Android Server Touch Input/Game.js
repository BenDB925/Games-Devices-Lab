var canvas;
var ctx;
this.touchable = 'createTouch' in document;
 var touches;
 var isTouching;

function Game()
{
	touches = new Array();

	if(this.touchable) 
	{
        canvas.addEventListener( 'touchstart', onTouchStart, false );
        canvas.addEventListener( 'touchmove', onTouchMove, false );
        canvas.addEventListener( 'touchend', onTouchEnd, false );
	}
}

Game.prototype.initializeCanvas = function()
{
	canvas= document.createElement("canvas");
	//ctx is the context that we will draw on
	ctx= canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
}

Game.prototype.init = function()
{
	this.initializeCanvas();
}

Game.prototype.onmousedown = function()
{

}

var mouseDown = 0;
document.body.onmousedown = function() { 
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

Game.prototype.onTouchStart = function(e)
{
    touches = e.touches; 
    isTouching = true;
}

Game.prototype.onTouchMove = function(e)
{
     // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
    touches = e.touches; 
    isTouching = true;
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);

	ctx.clearRect(0,0, 20000, 20000);

	if(touches != null)
	{
		for(var i=0; i< touches.length; i++)
		{
		    var touch = touches[i]; 
		    ctx.beginPath(); 
		    ctx.fillStyle = "white";
		    ctx.fillText(" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30); 
		    ctx.beginPath(); 
		    ctx.strokeStyle = "red";
		    ctx.lineWidth = "6";
		    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true); 
		    ctx.stroke();
		}
	}
	else if(mouseDown == 1)
	{ 
		    ctx.beginPath(); 
		    ctx.strokeStyle = "red";
		    ctx.lineWidth = "6";
		    ctx.arc(50, 50, 40, 0, Math.PI*2, true); 
		    ctx.stroke();
	}

	isTouching = false;

	//touches = new Array();


}
