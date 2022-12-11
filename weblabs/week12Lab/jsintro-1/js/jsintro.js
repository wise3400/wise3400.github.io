//alert("Hello World"); //A basic alert
//console.log("Hello World"); //A console log message.  Less annoying than an alert

//document.write(5+5); //+-*/

// var firstname = "Ian";
// var lastname = "Hales";

//document.write(firstname+lastname);
//document.getElementById("welcome").innerHTML = "Welcome, " + firstname + " " + lastname + ". Thanks for joining us today";
 
function welcome(){
 	//console.log("Welcome function worked");
 	//var firstnameclick = document.getElementById("firstnametext").value;
 	//var lastnameclick = document.getElementById("lastnametext").value;
 	//document.getElementById("welcome").innerHTML = "Welcome, " + firstnameclick + " " + lastnameclick + ". Thanks for joining us today";
}

function imageswap(){
//  	document.getElementById("image1").src = "img/iron-man.jpg";
//  	document.getElementById("image2").src = "img/storm.jpg";
//  	document.getElementById("image3").src = "img/wolverine.jpg";
}

function imagerollover(newimage){
// function imagerollover(targetimage, newimage){
 	//document.getElementById("image4").src = "img/iron-man.jpg";
 	//document.getElementById("image4").src = "img/" + newimage;
 	//document.getElementById(targetimage).src = "img/" + newimage;
}

function winter(){
 	document.getElementById("cubuilding").src = "img/winter.jpg";
 	document.getElementById("cutext").innerHTML = "This is Winter Time! Which I hate winter lol!";
 
 	document.getElementById("cuheading").innerHTML = "Winter!";

}
function spring(){
 	document.getElementById("cubuilding").src = "img/spring.jpg";
 	document.getElementById("cutext").innerHTML = "This is Spring Season! Which I like because I can enjoy the warm air!!!!";
 	
}
function summer(){
 	document.getElementById("cubuilding").src = "img/summer.jpg";
 	document.getElementById("cutext").innerHTML = "This is summer! Which I love because it is sooooo hot that I need the A/C on!!!!";
 	
}
function fall(){
 	document.getElementById("cubuilding").src = "img/fall.jpg";
 	document.getElementById("cutext").innerHTML = "This is fall! Which I don't really like because it gets a little bit cold out there especially in Colorado!!!";
 	
}

function winter(){//https://www.w3schools.com/jsref/dom_obj_style.asp
	 document.getElementById("cuheading").innerHTML = "Winter!";
	 document.getElementById("cubuilding").src = "img/winter.jpg";
	 document.getElementById("cutext").innerHTML = "This is Winter Time! It can get up to -17 to 30 degrees! It's COLD. WEAR A JACKET BEFORE YOU GO OUT!";
	 document.body.style.backgroundColor = "rgb(52, 216, 235)";
	 document.body.style.color = "rgb(0,0,255)";
	 document.body.style.fontFamily = "Times New Roman, Times, serif";
	 document.body.style.fontSize = "1.5em";
}
function spring(){//https://www.w3schools.com/jsref/dom_obj_style.asp
	 document.getElementById("cuheading").innerHTML = "Spring!";
	 document.getElementById("cubuilding").src = "img/spring.jpg";
	 document.getElementById("cutext").innerHTML = "This is Spring Time! It can get up to 50-80 degrees! It's sometimes HOT OR CHILLY! But's a good season! Enjoy the warm air.";
	 document.body.style.backgroundColor = "rgb(123, 245, 66)";
	 document.body.style.color = "rgb(88, 140, 98)";
	 document.body.style.fontFamily = "cursive";
	 document.body.style.fontSize = "1.5em";
}
function summer(){//https://www.w3schools.com/jsref/dom_obj_style.asp
	 document.getElementById("cuheading").innerHTML = "Summer!";
	 document.getElementById("cubuilding").src = "img/summer.jpg";
	 document.getElementById("cutext").innerHTML = "This is Summer Time! It can get up to 80-100 degrees, HOT HOT HOT! AIR CONDITIONING IS DEFINITELY NEEDED!!!!! You can wear shorts or anything that make you comfortable.";
	 document.body.style.backgroundColor = "rgb(255, 244, 43)";
	 document.body.style.color = "rgb(235, 0, 0)";
	 document.body.style.fontFamily = "fantasy";
	 document.body.style.fontSize = "1.5em";
}
function fall(){//https://www.w3schools.com/jsref/dom_obj_style.asp
	 document.getElementById("cuheading").innerHTML = "Fall!";
	 document.getElementById("cubuilding").src = "img/fall.jpg";
	 document.getElementById("cutext").innerHTML = "This is Fall Season! It can get up to 40-70 degrees. Not bad, but sometimes chilly in Colorado. A sweater and long pants is best suited for this type of season! Fall season can be pretty because of the leaves!!";
	 document.body.style.backgroundColor = "rgb(232,185,74)";
	 document.body.style.color = "rgb(99, 70, 1)";
	 document.body.style.fontFamily = "Verdana";
	 document.body.style.fontSize = "1.5em";
}