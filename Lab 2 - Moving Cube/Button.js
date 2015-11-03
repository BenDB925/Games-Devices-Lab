
function Button(pX, pY, pheight, pwidth)
{
	this.misPressed = false;
	this.mpositionX = pX;
	this.mpositionY = pY;
	this.mwidth = pwidth;
	this.mheight = pheight;
}

Button.prototype.Update = function(pMouseX, pMouseY)
{
	Draw();

	if(hasBeenClicked(pMouseX, pMouseY))
	{

	}
}

function hasBeenClicked(pMouseX, pMouseY)
{
	var isInX;
	if(pMouseX > this.mpositionX && pMouseX < (this.mpositionX + this.mwidth) )
		isInX = true;

	var isInY;
	if(pMouseY > this.mpositionY && pMouseY < (this.mpositionY + this.mheight) )
		isInY = true;

	if (isInX && isInY) 
		return true;
	else 
		return false;
}

Button.prototype.ClickedFunction = function()
{
	
}

Button.prototype.Draw = function()
{
	ctx.fillStyle = rgb(0,255,0);
	ctx.fillRect(this.mpositionX, this.mpositionY, this.mwidth, this.mheight);
}