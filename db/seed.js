const { Item, User } = require('../models/index');

// Always start by deleting everything
User.remove({}).then(() => {
	Item.remove({}).then(function() {
		User.register(new User({ username: 'virginia' }), 'password').then((user) => {
			Item.create({
				name: 'I had a great idea',
				description:
					'create something that makes app that perfectly fulfuill the requirements for this project',
				owner: user
			});

			Item.create({
				name: 'Start up Idea',
				description:
					'you know that thing in spy kids where she puts this little pop-corn like packet in the microwave and a straigh up mcdonalds meal comes out- that- lets make that happen',
				owner: user
			});

			Item.create({
				name: 'accomplishment for the day',
				description: 'none',
				owner: user
			});
		});

		User.register(new User({ username: 'lizD' }), 'password').then((user) => {
			Item.create({
				name: 'whats up yall',
				description: 'nothing much wbu',
				owner: user
			});

			Item.create({
				name: 'what am i doing',
				description: 'TRYING TO ADD ANOTHA USER',
				owner: user
			});

			Item.create({
				name: 'okay enough',
				description: 'i hate this',
				owner: user
			});
		});
	});
});
