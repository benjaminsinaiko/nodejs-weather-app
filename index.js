require('dotenv/config');

const request = require('request');
const argv = require('yargs').argv;

let apiKey = process.env.API_KEY;
let city = argv.c || 'chicago';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

request(url, function(err, response, body) {
  if (err) {
    console.log(apiKey);
    console.log('error: ', error);
  } else {
    console.log('body: ', body);
  }

  let weather = JSON.parse(body);
  let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
  console.log(message);
});
