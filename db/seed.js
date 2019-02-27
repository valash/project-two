const Item = require('../models/index');

// Always start by deleting everything
Item.remove({}).then(function() {
	// Then create "seed" items
	Item.create({
		name: 'I had a great idea',
		description: 'create something that makes app that perfectly fulfuill the requirements for this project'
	});

	Item.create({
		name: 'Start up Idea',
		description:
			'you know that thing in spy kids where she puts this little pop-corn like packet in the microwave and a straigh up mcdonalds meal comes out- that- lets make that happen'
	});

	Item.create({
		name: 'accomplishment for the day',
		description: 'none'
	});
});
