var computer = 0;
var answer1 = 0;

var userScore = 0;
var computerScore = 0;
//2 variables with image arrays: one is for the user and the other is for the computer.

var userPics = ["img/rock.jpg", "img/paper.jpg", "img/scissors.jpg", "img/gun.jpg", "img/car.jpg"];
var computerPics = ["img/rock.jpg", "img/paper.jpg", "img/scissors.jpg", "img/car.jpg"];


//A function called run. When the user hits "Shoot", then this function will be active to run all of the statements below.
function run()
{
	//if the user score is equal to 6, bring them to a victory screen
	if(userScore == 6)
	{
		window.location.href = "victory.html";
	}
	//if the computer score is equal to 6, bring the user to a losing screen
	if(computerScore == 6)
	{
		window.location.href = "lose.html";
	}

	var answer1 = document.getElementById("userchoice").value;
	console.log("Answer 1: " + answer1);
	
    
    //Alerts the user if they DID NOT pick a choice
	if(answer1==0)
	{ 
	 	alert("OH COME ON: You have not chosen a choice yet!");
	}

	//IMAGES SHOWING UP WHEN USER SELECTED THE CHOICE | Used from previous lab. But modified it a bit.
	document.getElementById("userPics").innerHTML = "";
	var getUserInput = document.getElementById("userchoice").selectedIndex;
	for(i=0; i<getUserInput; i++)
	{
	document.getElementById("userPics").innerHTML = "";
	document.getElementById("userPics").innerHTML += "<img src='" + userPics[i] + "'>" + "<br>";
	}
	

	//generating random pieces: either rock, paper, or scissors using Math.random function.
	//Thank you to this website, I was able to figure out the Math.random() function -- https://gist.github.com/joshfry/7327656
	var computer = Math.random();

	if(computer < 0.33334)
	{
		computer = "rock";
	}
	else if(computer <= 0.66667)
	{
		computer = "paper";
	}
	else 
	{
		computer = "scissors";
	}

	//if the user is greater than or equal to 3, bring them to victory screen
	if(userScore >= 3 && answer1 == "car")
	{
		alert("Yay! A car has been used!");
		userScore++;
	}
	//if the user is greater or equal to 4, bring them to victory screen
	if(userScore >= 4 && answer1 == "gun")
	{
		alert("Yay! A gun has been used. You killed the computer!");
		userScore++;
	}


	//comparisons using if else statements.
	//if the user picks "rock" and if the computer picks scissors, alert the user that they've won.
	//increment the userscore.
	if(answer1 == "rock" && computer == "scissors")
	{
		alert("You win! Woo hoo, congratulations!");
		console.log(computer);
		userScore++;
		
	}
	//if the user picks "rock" and if the computer picks paper, alert the user that the computer has won and they lost.
	//increase the computer score
	else if(answer1 == "rock" && computer == "paper")
	{
		alert("You lose! You gotta do better than that!");
		console.log(computer);
		computerScore++;
		
	}
	//if the user picks "paper" and if the computer picks rock, alert the user that the user has won.
	//increment the user score
	else if(answer1 == "paper" && computer == "rock")
	{
		alert("You win! Woo hoo, congratulations!");
		console.log(computer);
		userScore++;
		
	}
	//if the user picks "paper" and if the computer picks scissors, alert the user that the computer has won and they lost.
	//increase the computer score
	else if(answer1 == "paper" && computer == "scissors")
	{
		alert("You lose! You gotta do better than that!");
		console.log(computer);
		computerScore++;
	
	}
	//if the user picks "scissor" and if the computer picks rock, alert the user that the computer has won and they lost.
	//increase the computer score
	else if(answer1 == "scissors" && computer == "rock")
	{
		alert("You lose! You gotta do better than that!");
		console.log(computer);
		computerScore++;
		
	}
	//if the user picks "scissors" and if the computer picks paper, alert the user that the user has won.
	//increase the user score
	else if(answer1 == "scissors" && computer == "paper")
	{
		alert("You win! Woo hoo, congratulations!");
		console.log(computer);
		userScore++;

	}
	//if the user picks gun, then tell them that they can't cheat!
	//decrement the userscore
	else if(answer1 == "gun" && userScore < 4)
	{
		alert("You can't use a gun yet! Don't cheat! You may use a gun after your user score reaches 4. (Penalty: -1 point)");
		userScore--;
	}
	//if the user picks car then tell them you can escape.
	//take away 1 point from the userscore.
	else if (answer1 == "car" && userScore < 3)
	{
		alert("You can't use a car yet! Don't cheat! You may use a car after your user score reaches 3. (Penalty: -1 point)");
		userScore--;
	}
	//if the user's answer is the same as the computers, then it is a tie and alert them.
	else if(answer1 == computer)
	{
		alert("Tie! Try again!");
		console.log(computer);
	}
	else
	{
		alert("Keep it going!");
	}
	


	document.getElementById("userScore").innerHTML = "<b> User Score: </b>"+ "<b>" + userScore + "</b>";
	document.getElementById("computerScore").innerHTML = "<b> Computer Score:</b> "+ "<b>" + computerScore + "</b>";

	



	//This is for the pictures: (if else statement)
	//if the computer picks "rock" as their answer, then display it with computerPics at index 0.
	if(computer == "rock")
	{
		document.getElementById("computerPics").innerHTML = "<img src='" + computerPics[0] + "'>" + "<br>";
		return 0;
	}
	//if the computer picks "paper" as their answer, then display it with computerPics at index 1.
	else if(computer == "paper")
	{
		document.getElementById("computerPics").innerHTML = "<img src='" + computerPics[1] + "'>" + "<br>";
		return 0;
	}
	//if the computer picks "scissors" as their answer, then display it with computerPics at index 2.
	else 
	{
		document.getElementById("computerPics").innerHTML = "<img src='" + computerPics[2] + "'>" + "<br>";
		return 0;
	}
}
