var Game_map = null;
var GamEnd = null;
var Win = 0;
var Lose = 0;
Nmoves = 0;
//##############Drawing###############
function setup() {
	createCanvas(500,500);
	background(255);
	StartingNewGame();
	
}


function drawTable(x,y){

	for (var Y = 0; Y < 3; Y++) {
		
		for (var X=0; X<3; X++){

			rect(x+150*X,y+150*Y,150,150);
		}
	} 
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
	}
}

function circle(x,y){

	var X_index = 0;
	var Y_index = 0;
	Nmoves++;
	for (var Where_X = 175; Where_X<=475; Where_X+=150){

		if (x<=Where_X){

			position_img_x = Where_X-75

			break;

		}
		X_index++;

	}

	for (var Where_Y = 175; Where_Y<=475; Where_Y+=150){

		if (y<=Where_Y){

			position_img_y = Where_Y-75

			break;

		}
		Y_index++;
	}

	if (Game_map[Y_index][X_index]==0){
		Game_map[Y_index][X_index] = 1;
		ellipse(position_img_x,position_img_y, 130,130);
		return true
	}
	return false

}
//#####################################


//###############Plaeyrs###############
function bot_Play(){
	if (Nmoves==1){
		analyse_map();

	}else{

		while (true){

				var x = Math.round(Math.random()*2);
				var y = Math.round(Math.random()*2);

				if (Game_map[y][x]===0){
					cross(x,y);
					return
				}

			}

	}
}

function mouseReleased() {

	if (GamEnd){

		PlaeyrMoov = circle(mouseX,mouseY);
		GamEnd = WinOrLose();
		if (GamEnd && PlaeyrMoov){

			bot_Play();
			GamEnd = WinOrLose();
		}
	}
}

//###################Win tests###################
function WinOrLose(){

	if (horizontal()){

		if (vartical()){

			if(diagonale()){
				
				if (Game_map.every(equality)){

					print("equality!");
					print(Game_map);
					print('______________game_end______________');
					return false
				}

			}else{

				return false
			}
		}else{

			return false
		}
		return true
	}
	return false
}

function horizontal(){

	for (var y = 0; y<=2; y++){
		if (Game_map[y][0]!=0){
			if (Game_map[y][0]==Game_map[y][1] && Game_map[y][0]==Game_map[y][2]){

				Who(y,0);
				return false
			}

		}
	}
	return true
}

function vartical() {

	for (var x = 0; x<=2; x++){
		if (Game_map[0][x]!=0){
			if (Game_map[0][x]==Game_map[1][x] && Game_map[0][x]==Game_map[2][x]){

				Who(0,x);
				return false
			}
		}
	}
	return true
}

function diagonale(){

	for (var x = 0; x<=2; x+=2){
		if (Game_map[0][x]!=0){
			if (Game_map[0][x]==Game_map[1][1] && Game_map[0][x]==Game_map[2][2-x*1]){

				Who(0,x);
				return false
			}
		}
	}
	return true
}

function equality(Nember){
	if (Number.isInteger(Nember)){
		
		return Nember>0

	}else{
		if (Nember.every(equality)){
			return true
		}
		
	}
}

function Who(y,x){

	if (Game_map[y][x]==1){

		print("You Win!");
		Win++;

	}else{

		print("You Lose!");
		Lose++;
	}
	print(Game_map);
	print('_______'+str(Lose)+'_______game_end_______'+str(Win)+'_______');
}
//##############################################

//################## MENU ######################

function StartingNewGame(){

	drawTable(25,25);
	Game_map =  [[0,0,0],
	[0,0,0],
	[0,0,0]];
	GamEnd = true;
	Nmoves = 0;
	cross(1,1);

}
//#############################################
function analyse_map(){
	

		if(Game_map[1][0] == 1){


			cross(0,2);
			return

		}

		if(Game_map[1][2] == 1){


			cross(2,0);
			return

		}

		if(Game_map[0][1] == 1){


			cross(0,0);
			return

		}

		if (Game_map[2][1] == 1){

			cross(2,2);
			return

		}else{

			while (true){

				var x = Math.round(Math.random()*2);
				var y = Math.round(Math.random()*2);

				if (Game_map[y][x]===0){
					cross(x,y);
					return
				}

			}


		}

	}


function Bot(){

	for(x = 0; x<=2;x++){

		
		for(y = 0;x<=2;y++){




		}

	}
	

}