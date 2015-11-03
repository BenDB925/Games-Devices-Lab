function SceneManager()
{
	this.sceneList = new Array();
	this.currentScene;
	this.sceneList;
}

SceneManager.prototype.addScene = function(scene)
{
	this.sceneList.push(scene);
}

SceneManager.prototype.goToScene = function(title)
{
	for (var i = 0; i < this.sceneList.length; i++) 
	{
		if(this.sceneList[i].title == title)
		{
			if(this.currentScene != null)
				this.currentScene.sceneStop();
			this.currentScene = this.sceneList[i];
			this.currentScene.sceneStart();
		}
	};
}

SceneManager.prototype.nextScene = function()
{
	var currIndex;
	for (var i = 0; i < this.sceneList.length; i++) 
	{
		if(this.sceneList[i] == this.currentScene)
		{
			currIndex = i;
		}
	};
	if(this.currentScene != null)
		this.currentScene.sceneStop();

	if(currIndex+1 <this.sceneList.length)
		this.currentScene = this.sceneList[currIndex+1];
	else
		this.currentScene = this.sceneList[0];

	this.currentScene.sceneStart();
}

SceneManager.prototype.renderCurrentScene = function(ctx)
{
	this.currentScene.render(ctx);
}
SceneManager.prototype.updateCurrentScene = function()
{
	this.currentScene.update();
}

SceneManager.prototype.initCanvas = function()
{
	this.currentScene.initializeCanvas();
}