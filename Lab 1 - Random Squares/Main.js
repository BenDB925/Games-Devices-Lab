//Global Vars
var canvas;
var ctx; 

function main()
{

	initialiseCanvas();
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawCubes();
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

function drawCubes()
{
	for(var i =0; i < 200; i++)
	{
		ctx.fillRect(Math.random() * 800,Math.random()*800,30,30);
		ctx.fillStyle = rgb(Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1,Math.floor(Math.random() * 255) + 1);

	}
}

function rgb(r, g, b) 
{ 
 return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
 if(max<min) { 
  var temp = min; 
  min = max; 
  max = temp; 
 }
 return Math.max(min, Math.min(value, max)); 
}