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







