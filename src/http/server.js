import dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();

app.get('/', function (req, res) {
  res.send('Hello World');
})

const server = app.listen(3000,() => console.log('Listen on port ' + process.env.PORT));
