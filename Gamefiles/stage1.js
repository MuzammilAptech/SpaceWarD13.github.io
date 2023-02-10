
// Username ki javascript
// let txtdata = document.getElementById("txtdata");
// let addbtn = document.getElementById("addbtn");
// let playername = document.getElementById("playerName");

// addbtn.addEventListener("click", function(){
//     playername.textContent=txtdata.value;
// })

let weaponbox = document.querySelector(".weaponbox");
weaponbox.addEventListener("click", function(){
	alert("hint for Next Stage is Jaldi Ka Kaam Shaitaan Ka");
	weaponbox.remove(this);	
  })
// music ki javascript
let btnmusic = document.querySelector(".musicbtn");
let volturn = true;
let mymusic = new Audio();
mymusic.src = "../mysong.mp3";
btnmusic.addEventListener("click", function(){
    if(volturn){        
        this.setAttribute("class", "musicbtn");
        volturn = false;
		mymusic.pause();
        // btnmusic.textContent = "Music On"; 
    }
    else {
		this.setAttribute("class", "musicplay");
        volturn = true;
        mymusic.play();
        // btnmusic.textContent = "Music Off";
    }
})

// Health bar Javascript
var healthPoints = 24;

function updateHealthPoints(points) {

	healthPoints = points;
	var healthBar = document.querySelector("#healthBar");
	healthBar.style.width = points + "%";

	if(healthPoints < 1) {
		alert("Game over!");
		window.location.reload();
	}

}


function livingEnemies() {
	return document.querySelectorAll(".enemy:not(.dead)");
}


function iShoot(enemy){
	enemy.classList.add("dead");
	

	if(!livingEnemies().length) {
		alert("You win!");
		window.open('stage2.html','_self')
	}

}


function enemyAttacksMe(enemy) {

	if(healthPoints > 0) {

		enemy.classList.add("showing");

		setTimeout(()=> {
			enemyShootsMe(enemy);
		}, 1000);

		setTimeout(()=> {
			enemy.classList.remove("showing");
		}, 3000);
		
	}


}


function enemyShootsMe(enemy) {

	if(!enemy.classList.contains("dead")) {

		enemy.classList.add("shooting");
		updateHealthPoints(healthPoints - 0.5);

		setTimeout(()=> {
			enemy.classList.remove("shooting");
		}, 200);

	}

}


function randomEnemyAttacks() {

	var randomEnemyNo = Math.random() * livingEnemies().length;
	randomEnemyNo = Math.floor(randomEnemyNo);
	var enemy = livingEnemies()[randomEnemyNo];

	var randomDelay = Math.random() * 2000 + 1000;

	setTimeout( ()=> {
		enemyAttacksMe(enemy);
		randomEnemyAttacks();
	}, randomDelay);

}