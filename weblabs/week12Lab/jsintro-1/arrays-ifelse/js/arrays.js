var myPicture = document.getElementById("my-picture");
var counter = 0;

var pictures;
pictures = [
			"img/small.jpeg", //0
			"img/medium.jpeg", //1
			"img/large.jpeg", //2
			];

var comments;
comments = [
			"This is a picture of my baby tortoises that I got in 2012. They were 2 inches at that time.", //0
			"This is a picture of one of my tortoises. Her name is Loo-Loo and she grew a lot during the 4 years.", //1
			"This is a picture of a grown up Loo-Loo, she is currently 19 inches. <b> SO BIG!!!! STOP GROWING!!!!! </b>", //2
			];

var links;
links = [
			"<a href='https://en.wikipedia.org/wiki/African_spurred_tortoise'>About This Type Of Tortoise | Wikipedia </a>",
			"<a href='https://www.thesprucepets.com/sulcata-tortoise-1237267'>Sulcata Tortoise: Species Profile</a>",
			"<a href='https://www.medvetforpets.com/sulcata-tortoise-background-care-recommendations/'>Taking Care Of Them | Instructions</a>",
		];


function changePicture(){
	if(counter < pictures.length-1)
	{
		counter++;
		myPicture.src = pictures[counter];
		document.getElementById("counter-check").innerHTML = comments[counter];
		document.getElementById("link-check").innerHTML = links[counter];
	}
	else
	{
		counter = 0;
		myPicture.src = pictures[counter];
		document.getElementById("counter-check").innerHTML = comments[counter];
		document.getElementById("link-check").innerHTML = links[counter];
	}

}
function changePicturePrevious()
{
	if(counter > 0)
	{
		counter--;
		myPicture.src = pictures[counter];
		document.getElementById("counter-check").innerHTML = comments[counter];
		document.getElementById("link-check").innerHTML = links[counter];
	}
	else
	{
		counter = pictures.length-1;
		myPicture.src = pictures[counter];
		document.getElementById("counter-check").innerHTML = comments[counter];
		document.getElementById("link-check").innerHTML = links[counter];
	}
}

