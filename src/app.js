const Superfeedr = require('superfeedr');

const feedClient = new Superfeedr("login", "password");

feedClient.on('connected', () => {
	feedClient.list(1, (err, subs) => {
		if (!err) {
			console.log('Error:');
			console.log(err);
		} else {
			console.log(subs);
		}
	});
});