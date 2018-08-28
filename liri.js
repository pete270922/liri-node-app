var request = require('request');
var moment = require('moment');
var onething = require('node-spotify-api');

var command = process.argv[2];
var something = process.argv[3];


var config = {
    databaseURL: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"}

if(command === 'spotify-this-song'){
    spotifyThis(something);
}
else if (command === 'spotify-this-movie'){
    movieThis(something);
}
else if (command === 'concert'){
    concertThis(something);
}
else if (command === 'doWhatItSays'){
    doWhatItSays();
    console.log ("Wamo!");
}

function doWhatItSays(){
    fs.readFile('text.txt','utf8', function(err,data){
        data = data.split(' ');
        console.log(data);
     })
}


function spotifyThis(){
    fs.readFile('text.txt','utf8', function(err,data){
        data = data.split(' ');
        console.log(data);
    })
}

function concert(){
    fs.readFile('text.txt','utf8', function(err,data){
        data = data.split(' ');
        console.log(data);
    })
}