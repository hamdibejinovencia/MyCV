function pauseAudioAfterPlayingIt()
{
  console.log("hey");
  var audio = document.getElementById("audio");
  //audio.src = "assets\computer-keyboard-2.mp3";
  audio.addEventListener("canplaythrough", function () {
          setTimeout(function(){
              audio.pause();
              //alert("Audio Stop Successfully");
          },
          26000);
  }, false); 
}