var imageCount;

var pics = [
	"img/pic1.jpg",
	"img/pic2.jpg",
	"img/pic3.jpg",
	"img/pic4.jpg",
	"img/pic5.jpg",
	"img/pic6.jpg",
	"img/pic7.jpg",
	"img/pic8.jpg",
	"img/pic9.jpg",
	"img/pic10.jpg",
]
var descriptions = [
	"Picture of Vocanoes with Smoke",
	"Picture of Vocanoes EXPLODING!!!",
	"Picture of Vocanoes EXPLODING AGAIN!!!",
	"Picture of Vocanoes - Just sooo nice to see...",
	"Picture of Vocanoes with Smoke. It's almost going to EXPLODE!!",
	"Picture of Beautiful Mountain Shot ",
	"Picture of a Pleasant Looking Mountain ",
	"Picture of Volcanoes With Smoke Again!",
	"Picture of Volcanoes EXPLODING, THIS TIME IT IS MORE EXPLOSIONS!!",
	"Picture of Volcanoes with Smoke. This one looks pretty.",
]

function checkImages()
{
	document.getElementById("pics").innerHTML = "";
	var getUserInput = document.getElementById("userChoice").selectedIndex;
	for(i=0; i<getUserInput; i++){

	document.getElementById("pics").innerHTML += "<img src='" + pics[i] + "'>" + "<br>";
	document.getElementById("pics").innerHTML += "<b>" + "<h2>" + descriptions[i] + "</h2>" + "</b>" +"<br>" ;

}
	
}

