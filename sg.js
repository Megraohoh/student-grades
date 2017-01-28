// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript


// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var numOfA=0;
var numOfB=0;
var numOfC=0;
var numOfD=0;
var numOfF=0;

function forLoop(){
	for(var i=0; i<scores.length; i++) {
		if (scores[i] > 90) {
			numOfA++;
		}
		else if (scores[1]>80){
			numOfB++;
		}
		else if (scores[1]>70){
			numOfC++;
		}
		else if (scores[1]>60){
			numOfD++;
		}
		else {
			numOfF++;
		}
	
	}
 	console.log("number of A's: ",numOfA);
 	console.log("number of B's: ",numOfB);
 	console.log("number of C's: ",numOfC);
 	console.log("number of D's: ",numOfD);
 	console.log("number of F's: ",numOfF);
}