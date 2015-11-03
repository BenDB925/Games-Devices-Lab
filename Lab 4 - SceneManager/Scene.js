this.title; 
this.nextScene;

function Scene()
{
}

Scene.prototype.sceneStart = function()
{
	console.log("started scene");
}

Scene.prototype.sceneStop = function()
{
	console.log("stop scene");
}

Scene.prototype.update = function()
{
	console.log("updating");
}

Scene.prototype.render = function(ctx)
{
	console.log("rendering scene");
}
