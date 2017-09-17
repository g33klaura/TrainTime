// JavaScript for 'TrainTime' Assignment
// Steps to complete:
// [x] Setup Firebase app to store data
// [x] Form submit needs to send to Firebase to update page data
// [x] Adding train data with form creates table data
// [] When adding trains, admin users can submit:
// [x] Train Name  [x] Destination
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

var dateAdded = '';

// Variables that'll be calculated using Moment operations
var next = '';
var minAway = '';



// Testing moment.js  ~WORKS
var a = moment().format('LLLL');
	console.log(a);




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
			// console.log(trainName, dest, freq, firstTrain);


		// Push input values to Fb

		// .set overwrites on Fb each time
		// database.ref().set( {
		// .push creates new Fb object each time
		database.ref().push( {
			trainName: trainName,
			dest: dest,
			freq: freq,
			firstTrain: firstTrain,
			dateAdded: firebase.database.ServerValue.TIMESTAMP,
		});

		// Empty inputs after submit
		$('#add-train-form').trigger('reset');

	});
	// ^^Closes train-form submit

	database.ref().orderByChild('dataAdded').on('child_added', function(snapshot) {

		var sv = snapshot.val();

			console.log('Train ' + sv.trainName + ': Heading to: ' + sv.dest + ' every ' + sv.freq + ' minutes. First train leaves at: ' + sv.firstTrain);
			// console.log(sv.dest);
			// console.log(sv.freq);
			// console.log(sv.firstTrain); 
			// console.log(sv.dateAdded);

		var markup = '<tr><td>' + sv.trainName + '</td><td>' + sv.dest + '</td><td>' + sv.freq + '</td><td>' + 'Next TBD' + '</td><td>' + 'TBD' + '</td></tr>';

		$('table tbody').append(markup);
		// Half-works. Resets on page refresh  ~WORKS NOW! Wasn't grabbing from Fb after pushing properties: values
	});

})	
// ^^Closes doc-on-ready
