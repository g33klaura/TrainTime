// JavaScript for 'TrainTime' Assignment
// Steps to complete:
// [x] Setup Firebase app to store data
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

var database = firebase.database();

var trainName = '';
var destination = '';
var freq = '';
var next = '';
var minAway = '';

// Testing moment.js
var a = moment().format('LLLL');
	console.log(a);


// Following Firebase tutorial
// Get elements
var preObject = document.getElementById('object');
// Create references
// Referencing Firebase OBJECT**
// var dbRefObject = firebase.database().ref().child('object');
var dbRefObject = firebase.database().ref()
// Synce object changes
dbRefObject.on('value', snap => console.log(snap.val()));







// FUNCTIONS ====================
//




// MAIN PROCESS ====================
// 
