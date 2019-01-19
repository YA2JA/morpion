var Game_map = [[0,0,0],
		 		[0,0,0],
		 		[0,0,0]];
var wait = false
var Nofmoove = 0
function setup() {

	createCanvas(500, 500);
	background(220);
	drawTable(25,25)

}

function draw() {
	if (wait==false){
		bot_Play();
		wait = true;
	}

}

function drawTable(x,y){

	for (var Y = 0; Y < 3; Y++) {
		
		for (var X=0; X<3; X++){

			rect(x+150*X,y+150*Y,150,150);
		}
	}

}

function mouseReleased() {

		wait = Where();
		print(Game_map)

}
function Where() {
	if (mouseY<175){

		if (mouseX < 175) {

			if (Game_map[0][0]==0){

				ellipse(100, 100, 130, 130);
				Game_map[0][0] = 1;
			}

		}else if (mouseX > 175 && mouseX < 325){

			if (Game_map[0][1]==0){

				ellipse(250, 100, 130, 130);
				Game_map[0][1] = 1;

			}

		}else if (mouseX > 325 && mouseX < 475){


			if (Game_map[0][2]==0){
				ellipse(400, 100, 130, 130);
				Game_map[0][2] = 1;
			}
		}
	}
	if (mouseY>175 && mouseY<325){

		if (mouseX < 175) {
			if (Game_map[1][0]==0){
				ellipse(100, 250, 130, 130);
				Game_map[1][0] = 1;
			}

		}else if (mouseX > 175 && mouseX < 325){
			if (Game_map[1][1]==0){
				ellipse(250, 250, 130, 130);
				Game_map[1][1] = 1;
			}

		}else if (mouseX > 325 && mouseX < 475){
			if (Game_map[1][2]==0){
				ellipse(400, 250, 130, 130);
				Game_map[1][2] = 1;
			}
		}
	}
	if (mouseY>325){

		if (mouseX < 175) {
			if (Game_map[2][0]==0){
				ellipse(100, 400, 130, 130);
				Game_map[2][0] = 1;
			}

		}else if (mouseX > 175 && mouseX < 325){
			if (Game_map[2][1]==0){
				ellipse(250, 400, 130, 130);
				Game_map[2][1] = 1;
			}
		}else if (mouseX > 325 && mouseX < 475){
			if (Game_map[2][2]==0){
				ellipse(400, 400, 130, 130);
				Game_map[2][2] = 1;
			}
		}
	}
	return false;
}

function bot_Play(){

		do {
			var x = Math.round(Math.random()*2);
			var y = Math.round(Math.random()*2);

			if (Game_map[y][x]===0){
				cross(x,y)
				return
			}

		}while (true)
		Nofmoove++
}

function cross(x,y){
	if (x <= 2 || y <= 2) {
		line(
			35+150*x,
			35+150*y,
			35+150*x+130,
			35+150*y+130);
		line(
			35+150*x+130,
			35+150*y,
			35+150*x,
			35+150*y+130);
		Game_map[y][x] = 2;
	}else{

		return("Error, You try to exit from the map");

	}
}

/*
function WinOrLose(){
	if (Nofmoove>=3){
		for (var y = 0; y<2; y++){
			if (Game_map[y][0]==Game_map[y][1] && Game_map[y][0]==Game_map[y][2]){
				if (y==1){
					print("You Win!");
				}else{

					print("You Lose!")
				}
			}
		}
		for (var x = 0; x<2; x++){
			if (Game_map[0][x]==Game_map[1][x] && Game_map[0][0]==Game_map[y][2]){
				if (y==1){
					print("You Win!");
				}else{

					print("You Lose!")
				}
			}
		}
}

*/