// JavaScript for 'TrainTime' Assignment
// Steps to complete:
// [x] Setup Firebase app to store data
// [] Adding train data with form creates table data (GET THIS WORKING FIRST)
// [] THEN needs to send to Firebase to update page data
// [] When adding trains, admin users can submit:
// [] Train Name
// [] Destination
// [] First Train Time
// 	[] (in military time)
// [] Frequency of scheduled train (in minutes)
// [] Calculates when next train will arrive (relative to the current time)
// [] Users from multiple machines can view same train times

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyBFCC6me05S9bj-uKClv29LHwBZV0jDnHc',
    authDomain: 'train-time-6f8ee.firebaseapp.com',
    databaseURL: 'https://train-time-6f8ee.firebaseio.com',
    projectId: 'train-time-6f8ee',
    storageBucket: '',
    messagingSenderId: '787951890946'
};
firebase.initializeApp(config);




// VARIABLES ====================
// 

// Get a reference to the database service
var database = firebase.database();

var trainRef = firebase.database().ref('train');

// Empty variables for holding train data????
var trainName = '';
var dest = '';
var freq = '';
var next = '';
var minAway = '';

// OR array of objects for form inputs????
// How would this write new objects using Firebase??
/*
var trainsArray = [
	{ train1: 
		{
		trainName: "",
		dest: "",
		freq: "",
		next: "",
		minAway: ""
		},
	  train2:
	  {
	  	trainName: "",
		dest: "",
		freq: "",
		next: "",
		minAway: ""
	  },
	},
]; 
*/

// Testing moment.js  ~WORKS
var a = moment().format('LLLL');
	console.log(a);


// Following Firebase tutorial ====================
// Get elements
var preObject = document.getElementById('object');
// Create references
// Referencing Firebase OBJECT**
// var dbRefObject = firebase.database().ref().child('object');
var dbRefObject = firebase.database().ref()
// Synce object changes
dbRefObject.on('value', snap => {
	// console.log(snap.val());
	// preObject var = getElementById set above
	preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
// ========================================







// FUNCTIONS ====================
//

// function using .set() to save data to Firebase
// grabs input from form to set??
// minAway not set by form, but updates relative to next var??
function writeTrainData(trainName, dest, freq, next) {
	database.ref('train/' + trainName).set({
		dest: 'city',
		freq: 'minutes',
		next: 'time'
	});
};




// MAIN PROCESS ====================
// 

$(document).ready(function() { 
	
	// Take input values from form
	// Store in variables
	// Then use those vars to update the writeTrainData function

	// Following Firebase Form tutorial ====================
	// Adds on-submit for whole form rather than on-click of button.... interesting.... (otherwise same as what i wrote)
	$('#add-train-form').on('submit', event => {
		
		event.preventDefault();
	
		// [NEXT] Put in code so won't allow submit with empty data****


		// Grab inputs from form
		trainName = $('#train-name').val().trim();
		dest = $('#destination').val().trim();
		freq = $('#frequency').val().trim();
		next = $('#first-train-time').val().trim();
		
			// TESTING
			console.log(trainName, dest, next, freq);

		// Using var 'database' that we set to FB object earlier
		// Pushes data, but assigns random "name" to data each time....
		database.ref('train').push({
			trainName,
			dest,
			next,
			freq,
		});


		// Empty inputs after submit
		$('#add-train-form').trigger('reset');

	});


})	
