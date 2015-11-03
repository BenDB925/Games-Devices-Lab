var canvas;
var ctx;


function Game()
{
	initialiseCanvas();
	this.m_image = new Image();
	this.m_image.src = "Images/walkAnim.png";

	this.frameCounter = 0;
	this.currentFrame = 0;
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);

	ctx.clearRect(0,0,canvas.width, canvas.height);

	game.frameCounter++;
	if(game.frameCounter > 25)
	{
		game.frameCounter = 0;
		if(game.currentFrame < 2)
			game.currentFrame++;
		else
			game.currentFrame = 0;
	}

	ctx.drawImage(game.m_image, 162.5 + (162.5 * game.currentFrame), 0, 162.5, 232, 0, 0, 150, 232);

}

function initialiseCanvas()
{

	canvas = document.createElement("canvas");
	// CTX is the context that we will draw on.

	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
