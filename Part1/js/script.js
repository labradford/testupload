// Assignment2 Part1

// STEP 1 
/*
var name = prompt('Please enter your name');
alert(name.length);
*/

// STEP 2	
/*
var name = prompt('Please enter your name');
var num = prompt('Please enter a number between 1 and ' + name.length);
alert(name.charAt(num-1));
*/

// STEP 3	
/*
var firstName = prompt('Please enter your first name');
var lastName = prompt('Please enter your last name');
alert('Your name is ' + firstName + ' ' + lastName)
*/

// STEP 4.	
/*
var pangram = 'The quick brown fox jumps over the lazy dog';
alert(pangram.indexOf('fox'));
*/

// STEP 5	
/*
var pangram = 'The quick brown fox jumps over the lazy fox';
alert(pangram.lastIndexOf('fox'));
*/


// STEP 6	
/*
var pangram = 'The quick brown fox jumps over the lazy dog';
var name = prompt('Please enter your name');
alert(pangram.replace('the lazy dog', name));
*/

//STEP 7	
/*
var pangram = 'The quick brown fox jumps over the lazy dog';
var word = prompt('Please enter a word');
alert(pangram.match(word));
*/

//STEP 8	
/*
var old_string = 'The quick brown fox jumps over the lazy dog';
var new_string = old_string.slice(30,43);
alert(new_string.toUpperCase());
*/


// STEP 9	
/*
var pangram = '            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
alert(pangram.trim().toLowerCase());
*/


//STEP 10
/*
var pangram = 'the quick brown fox jumps over the lazy dog';
alert(pangram.slice(0,1).toUpperCase() + pangram.slice(1,43))
*/
