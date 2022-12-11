var q1 = 0;

var q2 = 0;

var q3 = 0;

var q4 = 0;

function quizcheck() {

	var answer1 = document.getElementById("question1").value;
	console.log("Answer 1: " + answer1);

	var answer2 = document.getElementById("question2").value;
	console.log("Answer 2: " + answer2);

	var answer3 = document.getElementById("question3").value;
	console.log("Answer 3: " + answer3);

	var answer4 = document.getElementById("question4").value;
	console.log("Answer 4: " + answer4);

	

        
	if(answer1==0){ //Alerts the user if they did not answer question 1.
	 	alert("You have not answered question 1, please answer question 1.");
	}
	if(answer2==0){ //Alerts the user if they did not answer question 2.
		alert("You have not answered question 2, please answer question 2.");
	}
	if(answer3==0){ //Alerts the user if they did not answer question 3.
		alert("You have not answered question 3, please answer question 3.");
	} 
	if(answer4==0){ //Alerts the user if they did not answer question 4.
		alert("You have not answered question 4, please answer question 4.");
	} 
	


	// if(answer1==0 || answer2==0 || answer3==0){ //Alerts the user if they did not answer question 3.
	// 	alert("You have not answered all of the questions");
	// } 

	if(answer1 > 0 && answer2 > 0 && answer3 > 0 && answer4 > 0)
	{
		if(answer1 == 1)
		{
			q1++;
		}
		if(answer2 == 2)
		{
			q2++;
		}
		if(answer3 == 3)
		{
			q3++;
		}
		if(answer4 == 3)
		{
			q4++
		}
	
	}
		


		document.getElementById("imagedisplay").innerHTML = "Q1 Score: "+q1;
		document.getElementById("webdisplay").innerHTML = "Q2 Score: "+q2;
		document.getElementById("textdisplay1").innerHTML = "Q3 Score: "+q3;
		document.getElementById("textdisplay2").innerHTML = "Q4 Score: "+q4;

		//checking to see if all questions, half questions, or none

		if(q1 == 1 && q2 == 1 && q3 == 1 && q4 == 1)
		{
			document.getElementById("textdisplay3").innerHTML = " <b>You are all correct! Your score is 100% </b>";
		}
		else if(q1 == 1 && q2 == 0 && q3 == 0 && q4 ==0 || q1 == 0 && q2 == 1 && q3 == 0 && q4 ==0 || q1 == 0 && q2 == 0 && q3 == 1 && q4 ==0 || q1 == 0 && q2 == 0 && q3 == 0 && q4 ==1)
		{
			document.getElementById("textdisplay3").innerHTML = " <b>You got 1 of 4 correct! Your score is 25% </b>";
		}
		else if(q1 == 1 && q2 == 1 && q3 == 0 && q4 ==0 || q1 == 0 && q2 == 0 && q3 == 1 && q4 ==1 || q1 == 1 && q2 == 0 && q3 == 1 && q4 ==0 || q1 == 0 && q2 == 1 && q3 == 1 && q4 ==0 || q1 == 1 && q2 == 0 && q3 == 0 && q4 ==1 || q1 == 0 && q2 == 0 && q3 == 1 && q4 ==1 || q1 == 0 && q2 == 1 && q3 == 0 && q4 ==1)
		{
			document.getElementById("textdisplay3").innerHTML = " <b>You got 2 of 4 correct! Your score is 50% </b>";
		}
		else if(q1 == 1 && q2 == 1 && q3 == 1 && q4 ==0 || q1 == 0 && q2 == 1 && q3 == 1 && q4 ==1 || q1 == 1 && q2 == 1 && q3 == 0 && q4 ==1 || q1 == 1 && q2 == 0 && q3 == 1 && q4 ==1)
		{
			document.getElementById("textdisplay3").innerHTML = " <b>You got 3 of 4 correct! Your score is 75% </b>";
		}
		else 
		{
			document.getElementById("textdisplay3").innerHTML = " <b>You might have some incorrect answers. </b>";
		}
		
		q1 = 0;
		q2 = 0;
		q3 = 0;
		q4 = 0;
	}
