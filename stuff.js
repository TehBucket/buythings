var money = 50;
var things = 0;
var statust = "Welcome to Thing-Buy-Sys";
var eyeDir = 1;
var eyeLeft = 59;
var eyeSpeed;

var eye = document.getElementById('eye');

//various statuses, depends on current amount of money
var statuslist = function(){
if(money >= 0){statust = "Welcome to Thing-Buy-Sys";}
else if(money < 0 && money >= -50){statust = "Debt awarded, account continued.";eyeSpeed = .4;}
else if(money < -50 && money >= -130){statust = "Debt increased, penalty canceled.";eyeSpeed = .7;}
else if(money < -130 && money >= -300){statust = "Debt over limit, ignored.";eyeSpeed = 1;}
else if(money < -300 && money >= -480){statust = "Exceeded national debt, 40 day grace period.";eyeSpeed = 2.4;}
else if(money < -480 && money >= -5000){statust = "Debt overflow, error";eyeSpeed = 5;}
else{statust = "error"}
}


var moveEye = function(){
eyeLeft = eyeLeft + 1*eyeDir*eyeSpeed;
if(eyeLeft > 136 || eyeLeft <59){eyeDir = -1*eyeDir;}
eyeleftstring = eyeLeft + "px"
eye.style.left = eyeleftstring;
}
var int=self.setInterval(function(){moveEye()},1);


var buy = function (amount) {
    amount = parseInt(amount);
    money = money - amount;
    things = things + amount;
	statuslist();
	
    document.getElementById("money").innerHTML = money;
    document.getElementById("things").innerHTML = things;
	document.getElementById("status").innerHTML = statust;

}

//resets all values, like refreshing the page
var resetall = function (){
money = 50;
things = 0;
eyeDir = 1;
eyeLeft = 59;
eyeSpeed = .2;

var statust = "Welcome to Thing-Buy-Sys";
document.getElementById("money").innerHTML = money;
document.getElementById("things").innerHTML = things;
document.getElementById("status").innerHTML = statust;
}
 
 //inputs
var buttona = document.getElementsByTagName('button');
for(var i = 0; i < buttona.length; i++){
    buttona[i].addEventListener('click', function() {
	if(this.className == "buybutton") {buy(this.id);}
	else if(this.className == "resetbutton") {resetall();}
	});
}

resetall();
