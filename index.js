// first take six variables 
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var showCurrentTime = function(){

console.log('hello ')
    //display string on webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    
    //Sethours
    if(hours >= noon){
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }
    //Set minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //Set seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + ":" + meridian + "!";
    clock.innerHTML = clockTime;

}

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function(){

    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"

    var timeEventsJS = document.getElementById('timeEvent');
    var lolcatImage = document.getElementById('lolcatimage');

    if (time == partytime) {
        
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's Party!";
    }

    else if(time == wakeuptime){

        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    }

    else if(time == lunchtime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }

    else if(time == naptime){
        
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    }
    else if(time > noon) {

        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good MOrning";
    }
    else if(time >= evening ){

        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good Evening"
    }
    
    else{
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon";
    }
    
    console.log(messageText);
    timeEventsJS.innerHTML = messageText;
    lolcatImage.src = image;

    showCurrentTime();
}

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyButton = document.getElementById('partyTimeButton')

var partyEvents = function(){
debugger
    if(partytime < 0){

        partytime = new Date().getHours();
        partyTimeButton.innerHTML = "party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else{

        partytime = -1;
        partyTimeButton.innerHTML = "party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
}

partyButton.addEventListener('click', partyEvents);
partyEvents();


// Activates Wake-Up selecto
var wakeUpTimeSelector = document.getElementById('wakeupTimeSelector');

var wakeUpEvents = function() {
debugger
    wakeuptime = wakeUpTimeSelector.value;
}

wakeUpTimeSelector.addEventListener('change', wakeUpEvents);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var lunchEvents = function(){
debugger
    lunchtime = lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener('change', lunchEvents);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById('napTimeSelector');

var napEvents = function(){
debugger
    naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener('change', napEvents);








