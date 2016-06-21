// Assignment2, Part 2 - Date and Date Functions (6 points)

// STEP 1 
/*
var d = new Date();
console.log(d.toDateString());
*/

// STEP 2	
/*
var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();
if (month == 8 || month == 3 || month == 5 || month == 10) {
	console.log(30);
} else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
	console.log(31);
} else if (month == 1 && ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
	console.log(29);
} else {
	console.log(28);
}
*/
// STEP 3.	C
/*
var d = new Date();
var month = d.getMonth();
switch (month) {
	case 0 :
		console.log('January');
		break;
	case 1 :
		console.log('February');
		break;
	case 2 :
		console.log('March');
		break;
	case 3 :
		console.log('April');
		break;
	case 4 :
		console.log('May');
		break;
	case 5 :
		console.log('June');
		break;
	case 6 :
		console.log('July');
		break;
	case 7 :
		console.log('August');
		break;
	case 8 :
		console.log('September');
		break;
	case 9 :
		console.log('October');
		break;
	case 10 :
		console.log('November');
		break;
	default: 
		console.log('December');
}
*/
// STEP 4
/*
var d = new Date();
var day = d.getDay();
if (day == 0 || day == 6) {
	console.log('It\'s the weekend!');
} else {
	console.log('Weekday');
}
*/

// STEP 5.	
/*

var d = new Date();
var y = d.getDay();
if (y==0) {
	console.log('Yesterday was Saturday');
} else if (y == 1){
	console.log('Yesterday was Sunday');
} else if (y == 2){
	console.log('Yesterday was Monday');
} else if (y == 3){
	console.log('Yesterday was Tuesday');
} else if (y == 4){
	console.log('Yesterday was Wednesday');
} else if (y == 5){
	console.log('Yesterday was Thursday');
} else {
	console.log('Yesterday was Friday');
}
*/
// STEP 6
/*
var d = new Date();
console.log(d.toDateString().slice(0,1));
*/


