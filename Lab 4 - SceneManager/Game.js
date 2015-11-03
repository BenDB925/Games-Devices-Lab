
var canvas;
var ctx;

function Game()
{


}

Game.prototype.initializeCanvas = function()
{
	canvas= document.createElement("canvas");
	ctx= canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	console.log("inited canvas");
	
}

Game.prototype.init = function()
{
	this.initializeCanvas();
	this.sceneManager = new SceneManager();
	this.titleScene = new TitleScene();
	this.sceneManager.addScene(this.titleScene);
	this.menuScene = new MenuScene();
	this.sceneManager.addScene(this.menuScene);

	this.sceneManager.nextScene();

}

var mouseDown = 0;
document.body.onmousedown = function() { 
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);

	if(this.mouseDown && this.changedLastFrame == false)
	{
		game.sceneManager.nextScene();
		this.changedLastFrame = true;
	}
	else if(!this.mouseDown)
		this.changedLastFrame = false;

	game.sceneManager.updateCurrentScene();
	game.sceneManager.renderCurrentScene(ctx);
}
