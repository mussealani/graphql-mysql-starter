import config from 'config';
import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})

const server = app.listen(3000,() => console.log('Listen on port ' + config.get('app.port')));
