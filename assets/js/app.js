// JavaScript for 'TrainTime' Assignment
// Steps to complete:
// [x] Setup Firebase app to store data
// [x] Form submit needs to send to Firebase to update page data
// [x] Adding train data with form creates table data
// [x] When adding trains, admin users can submit:
// [x] Train Name  [x] Destination
// [x] First Train Time  [x] (in military time)
// [x] Frequency of scheduled train (in minutes)
// [x] Calculates when next train will arrive in normal time
// [x] Users from multiple machines can view same train times

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
// .subtract(1, 'years');
var time = '';


// MOMENT.JS WRANGLING ====================
//
// Testing moment.js  ~WORKS
var a = moment().format('LLLL');
	console.log(a);




console.log('-----------------------------');




// FUNCTIONS ====================
//

// Materialize.toast(message, displayLength, className, completeCallback);
  // Materialize.toast('Train added', 4000) 
  // 4000 is the duration of the toast



// MAIN PROCESS ====================
// 

$(document).ready(function() { 
	
	// Take input values from form
	// Store in variables

	// Following Firebase Form tutorial ====================
	// Adds on-submit for whole form rather than on-click of button.... interesting.... (otherwise same as what i wrote)
	$('#add-train-form').on('submit', event => {
		
		event.preventDefault();

		console.log('Submit clicked');
	
		// Grab inputs from form
		trainName = $('#train-name').val().trim();
		dest = $('#destination').val().trim();
		freq = $('#frequency').val().trim();
		firstTrain = $('#first-train-time').val().trim();
		
			// TESTING
			// console.log(trainName, dest, freq, firstTrain);

		// Converts time captured from form to 24-hour military time
		// next = moment(firstTrain, 'hh:mm a').format('HH:mm');

		// Converts military time entered and converts to regular old normal time
		next = moment(firstTrain, 'HH:mm').format('h:mm a');
			console.log(next);


		// ****************Have the code convert to military time, but DISPLAY on page as regular time, then keep Military to do calculations too.
		// Cuz otherwise it's silly

		// Mathing for minutes away
		// time = current time -- time/moment need formatting?*****
		// time = moment();

		var firstTimeConverted = moment(next, 'hh:mm').subtract(1, 'years');
			console.log('First time converted: ' + firstTimeConverted);

		var diffTime = moment().diff(moment(firstTimeConverted), 'minutes');
			console.log('Diff time in minutes: ' + diffTime);

		var tRemainder = diffTime % freq;
			console.log('Remainder of: ' + tRemainder);

		var minTilTrainArrives = freq - tRemainder;
			console.log('Minutes till train arrives: ' + minTilTrainArrives);

		minAway = minTilTrainArrives;




		// Push input values to Fb
		database.ref().push( {
			trainName: trainName,
			dest: dest,
			freq: freq,
			firstTrain: firstTrain,
			dateAdded: firebase.database.ServerValue.TIMESTAMP,
			// nextTrain: next,
			next: next,
			minAway: minAway
		});

		// Empty inputs after submit
		$('#add-train-form').trigger('reset');

	});
	// ^^Closes train-form submit

	database.ref().orderByChild('dataAdded').on('child_added', function(snapshot) {

		var sv = snapshot.val();

			console.log('Train ' + sv.trainName + ': Heading to: ' + sv.dest + ' every ' + sv.freq + ' minutes. Military time is: ' + sv.firstTrain + ' First train leaves at: ' + sv.next + ' Train is ' + sv.minAway + ' minutes away. Better hurry!');
			// console.log(sv.dest);
			// console.log(sv.freq);
			// console.log(sv.firstTrain); 
			// console.log(sv.dateAdded);

		var markup = '<tr><td>' + sv.trainName + '</td><td>' + sv.dest + '</td><td>' + sv.freq + '</td><td>' + sv.next + '</td><td>' + sv.minAway + '</td></tr>';

		$('table tbody').append(markup);
		// Half-works. Resets on page refresh  ~WORKS NOW! Wasn't grabbing from Fb after pushing properties: values
	});

})	
// ^^Closes doc-on-ready
