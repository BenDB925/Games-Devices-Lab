function MenuScene()
{
	this.title = "Menu Scene";
}

MenuScene.prototype = new Scene();



MenuScene.prototype.render = function(ctx)
{
	ctx.clearRect(0, 0, 2000, 2000);
  	ctx.font = "48px serif";
  	ctx.fillText(this.title, 10, 50);

}

MenuScene.prototype.sceneStart = function()
{
		console.log("menu start");
}

MenuScene.prototype.sceneStop = function()
{
		console.log("stopping menu");
}

MenuScene.prototype.update = function()
{
		//console.log("updating menu");
}

