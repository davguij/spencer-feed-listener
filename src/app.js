let express = require('express');
let app = express();
let bodyParser = require('body-parser')

app.use(bodyParser.json());       // to support JSON-encoded bodies

app.post('/webhook', function (req, res) {
	console.log(JSON.stringify(req.body));
	res.sendStatus(200);
});

app.listen(8888, function () {
	console.log('App listening on port 8888!');
});
