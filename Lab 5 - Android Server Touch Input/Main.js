//Global Vars
var game;

function main()
{

	game = new Game();
	game.init();
	game.gameLoop();

	window.addEventListener("mousedown", game.onmousedown);
	window.addEventListener("touchstart", game.onTouchStart);
	window.addEventListener("touchmove", game.onTouchMove);
}
