var twelveHourTime;
var t1 = "PM";
var t2 = "AM";
var milTime = " "
twelveHourTime = true;

//img array.
var img = ["nature.jpg", "nature1.jpg", "nuture2.jpg"];

function clock(){
	// document.getElementById("year").innerHTML = "2016";

	var today;
	today = new Date();

	var year;
	year = today.getFullYear();
	//console.log(year);

	var month;
	month = today.getMonth();
	//console.log(month);

	var monthOfTheYear;
	monthOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date;
	date = today.getDate();
	//console.log(date);

	var day;
	day = today.getDay();
	//console.log(day);

	var dayOfTheWeek;
	dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


	var hour;
	hour = today.getHours();
	//console.log(hour);

	var minute;
	minute = today.getMinutes();
	//console.log(minute);

	var second;
	second = today.getSeconds();
	//console.log(second);


	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = monthOfTheYear[month];
	document.getElementById("date").innerHTML = date;
	document.getElementById("day").innerHTML = dayOfTheWeek[day];

	

	var hourColor2;
	hourColor2 = Math.round(hour * 10.086)

	//console.log(hourColor);


	if(twelveHourTime == true){


		if(hour >= 12){
			document.getElementById("meridiem").innerHTML = t1.bold();
		}else{
			document.getElementById("meridiem").innerHTML = t2.bold();
		}

		if(hour > 12){
			hour = hour - 12;
		}


	}
	else
	{
		document.getElementById("meridiem").innerHTML = milTime;
	}

	

	if(minute < 10){
		minute = "0" + minute;
	}

	if(second < 10){
		second = "0" + second;	
	}

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;


	var minuteColor2;
	minuteColor2 = Math.round(minute * 4.322);
	//console.log(minuteColor);


	var secondColor2;
	secondColor2 = Math.round(second * 4.322);
	//console.log(secondColor);

	//changes image every one second

	if(second % 2)
	{
		
		document.getElementById("pictures").src = img[0];

	}
	else
	{

		document.getElementById("pictures").src = img[1];
		document.getElementById("pictures").src = img[2];
	}

	
	
	
	
	//Changing hours, minutes, and seconds Text Colors every minute.
	document.getElementById("hour").style.color = "rgb(" + hourColor2 + "," + minuteColor2 + "," + secondColor2 + ")";
	document.getElementById("minute").style.color = "rgb(" + hourColor2 + "," + minuteColor2 + "," + secondColor2 + ")";
	document.getElementById("second").style.color = "rgb(" + hourColor2 + "," + minuteColor2 + "," + secondColor2 + ")";
	
	//Changing day, month, and date Text Colors every minute.
	document.getElementById("day").style.color = "rgb(" + hourColor2 + "," + minuteColor2 + "," + secondColor2 + ")";
	document.getElementById("month").style.color = "rgb(" + hourColor2 + "," + minuteColor2 + "," + secondColor2 + ")";
	document.getElementById("date").style.color = "rgb(" + hourColor2 + "," + minuteColor2 + "," + secondColor2 + ")";

}


function toggleTwelve(){
	//console.log("Toggle, YAY!");
		twelveHourTime = true;
		//console.log(twelveHourTime);
	
}

function militaryTime()
{
	twelveHourTime = false;
}

clock();
setInterval(clock, 10);

// var counter = 0;

// function countTest(){
// 	counter++;
// 	console.log(counter);
// }

// countTest();
// setInterval(countTest, 1000);





