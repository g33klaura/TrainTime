// Testing moment.js
var a = moment().format('LLLL');
	console.log(a);

// 'LLLL' = Friday, September 1, 
// Other formatting on moment.js guide

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




// VARIABLES ====================
// 

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBFCC6me05S9bj-uKClv29LHwBZV0jDnHc",
    authDomain: "train-time-6f8ee.firebaseapp.com",
    databaseURL: "https://train-time-6f8ee.firebaseio.com",
    projectId: "train-time-6f8ee",
    storageBucket: "",
    messagingSenderId: "787951890946"
};
firebase.initializeApp(config);




// FUNCTIONS ====================
//




// MAIN PROCESS ====================
// 
