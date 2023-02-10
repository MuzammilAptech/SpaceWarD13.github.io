
// Username ki javascript
// let txtdata = document.getElementById("txtdata");
// let addbtn = document.getElementById("addbtn");
// let playername = document.getElementById("playerName");

// addbtn.addEventListener("click", function(){
//     playername.textContent=txtdata.value;
// })

// randomEnemyAttacks();



let bomberjee1 = document.getElementById("bomber1");
let bomberjee2 = document.getElementById("bomber2");
let bomberjee3 = document.getElementById("bomber3");
let bomberjee4 = document.getElementById("bomber4");
let bomberjee5 = document.getElementById("bomber5");
let bomberjee6 = document.getElementById("bomber6");
let realone = document.getElementById("realone");
let bomberjee8 = document.getElementById("bomber8");


bomberjee1.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee1.classList.add("gayab");
    bomberjee1.classList.add("dead");
    bomberjee1.remove()
})
bomberjee2.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee2.classList.add("gayab");
    bomberjee2.classList.add("dead");
})
bomberjee3.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee3.classList.add("gayab");
    bomberjee3.classList.add("dead");
})
bomberjee4.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee4.classList.add("gayab");
    bomberjee4.classList.add("dead");
})
bomberjee5.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee5.classList.add("gayab");
    bomberjee5.classList.add("dead");
})
bomberjee6.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee6.classList.add("gayab");
    bomberjee6.classList.add("dead");
})

bomberjee8.addEventListener("click",function(){
    alert ("Choose the Wrong One Game Over");
    bomberjee8.classList.add("gayab");
    bomberjee8.classList.add("dead");
})
// real Bombers //

realone.addEventListener("click",function(){
    realone.remove(this);
    alert ('you Captured an Alien Bomber');
    window.open('quitgame.html','_self');
     
})





let weaponbox = document.querySelector(".weapon-box");
weaponbox.addEventListener("click", function(){
	alert("NEXT STAGE HINT : Different One is Real One.");
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
		alert("Game over Try Again!");
		window.location.reload();
	}

}


function livingEnemies() {
	return document.querySelectorAll(".enemy:not(.dead)");
}


// function iShoot(enemy){
//     enemy.classList.add("gayab");
//     enemy.classList.add("dead");
	

// 	if(!livingEnemies().length) {
// 		alert("Conguratulation You Clear This STAGE!");
// 		window.open('stage4.html','_self')
// 	}

// }


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