// JavaScript for 'TrainTime' Assignment
// Steps to complete:
// [x] Setup Firebase app to store data
// [] Adding train data with form creates table data (GET THIS WORKING FIRST??)
// [] THEN needs to send to Firebase to update page data
// [] When adding trains, admin users can submit:
// [] Train Name  [] Destination
// [] First Train Time  [] (in military time)
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

// Reference to the database service
var database = firebase.database();

// var trainRef = firebase.database().ref('trains');

// Variables to be set by form inputs
var trainName = '';
var dest = '';
var freq = '';
var firstTrain = '';

// Variables that'll be calculated using Moment operations
var next = '';
var minAway = '';



// Testing moment.js  ~WORKS
var a = moment().format('LLLL');
	// console.log(a);




// Following Firebase tutorial ====================
// Displays Fb object on page
// Get elements
var preObject = document.getElementById('object');
// Create references to Fb OBJECT**
// var dbRefObject = firebase.database().ref().child('object');
var dbRefObject = firebase.database().ref()
// Synce object changes
dbRefObject.on('value', snap => {
	// console.log(snap.val());
	// preObject variable is getElementById set above
	preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
// ========================================







// FUNCTIONS ====================
//







// MAIN PROCESS ====================
// 

$(document).ready(function() { 
	
	// Take input values from form
	// Store in variables

	// Following Firebase Form tutorial ====================
	// Adds on-submit for whole form rather than on-click of button.... interesting.... (otherwise same as what i wrote)
	$('#add-train-form').on('submit', event => {
		
		event.preventDefault();
	
		// Grab inputs from form
		trainName = $('#train-name').val().trim();
		dest = $('#destination').val().trim();
		freq = $('#frequency').val().trim();
		firstTrain = $('#first-train-time').val().trim();
		
			// TESTING
			console.log(trainName, dest, freq, firstTrain);


		// Push input values to Fb
		database.ref().set( {
			trainName: trainName,
			dest: dest,
			freq: freq,
			firstTrain: firstTrain,
		});

		var markup = '<tr><td>' + trainName + '</td><td>' + dest + '</td><td>' + freq + '</td><td>' + next + '</td><td>' + minAway + '</td></tr>';

		$('table tbody').append(markup);
		// Half-works. Resets on page refresh

		// Empty inputs after submit
		$('#add-train-form').trigger('reset');

	});
	// ^^Closes train-form submit
})	
// ^^Closes doc-on-ready
