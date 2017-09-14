// Fantasty train data
// Train Name, Destination, Frequency (min), Next Arrival*, Min Away(relative to current time)
/*
Train 1
War Rig
Citadel
120 min (2 hours)
06:30a


Train 2
Reveries Rail
Westworld
30 min
09:00a


Train 3
Dungeon Train
Ooo Valley
5 min
12:00p


Train 4
Tyrannosaurus ExpRex, sponsored by InGen
Isla Nublar
300 min (5 hours)
05:00a


Train 5
Luck Dragon Locomotive
Fantasia
1440 min (24 hours)
16:20 (4:20p)


Train 6
Acme Express
Toontown (LA), California
4080 min (2 days, 20 hrs)
03:45p

*/


// function using .set() to save data to Firebase
// grabs input from form to set??
// minAway not set by form, but updates relative to next var??
// function writeTrainData(trainName, dest, freq, next) {
// 	// database.ref('train/' + trainName).set({
// 	database.ref('train/').set({
// 		trainName: 'name',
// 		dest: 'city',
// 		freq: 'minutes',
// 		next: 'time'
// 	});
// };

// Double-check if this is working/or not when back online*******
// function errorObject() {
// 	console.log("The read failed: " + errorObject);
// };

// function calcMinAway(argument) {
// 	var aFreq = moment( [] )
// }



// [NEXT] Put in code so won't allow submit with empty data****



// Fb object when i had it under 'trains', and would add a unique ID to each object
// which I'm pretty sure was fucking things up for me

// Using var 'database' that we set to FB object earlier
		// Pushes data, but assigns random "name" to data each time.... (Think don't worry about this for now... ask in class...)
		database.ref('trains').push({
			trainName,
			dest,
			next,
			freq,
		});

		database.ref().on('value', function(snapshot) {
			// console.log(snapshot.val());
			console.log(snapshot.val().trains);
			// console.log(snapshot.val().dest);
			// console.log(snapshot.val().next);
			// console.log(snapshot.val().freq);
		});



// STUFF I WROTE BEFORE WATCHING TUTORIAL VIDEO
// Just inside document-on-ready

	// On-click for submit button
	$('#add-train').on('click', function(event) {

		event.preventDefault();

		// Grab input value for train name
		// Write to trainName var
		trainName = $('#train-name').val().trim();

		// Update HTML via Firebase*****

		// Update HTML via jQuery **TESTING**
		$('.name').text(trainName);

		// Write to destination var
		dest = $('#destination').val().trim();

		// Update HTML via Firebase*****

		// Update HTML via jQuery **TESTING**
		$('.destination').text(dest);


		// Happens LAST in function??
		// Call function to set Firebase data
		writeTrainData();

		// Empty inputs after submit
		$('#train-name, #destination').val('');
	});







