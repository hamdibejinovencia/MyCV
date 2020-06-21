
var aud= document.getElementById("myAudio"); 

function playAud() { 
    aud.play(); 
} 

function pauseAud() { 
    var aud= document.getElementById("myAudio"); 
    aud.pause(); 
} 

function myFunction() { 
  isSupp = aud.canPlayType("audio/mp3");
  if (isSupp == "") {
    aud.src = "audio.ogg";
  } else {
    aud.src = "audio.mp3";
  }
  aud.load();
}
