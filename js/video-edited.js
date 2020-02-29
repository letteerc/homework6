var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

/*function decreaseSpeed() { 

  	console.log("Speed is "+ );
} 

function increaseSpeed() {

	console.log("Speed is "+ );
} 

function skipAhead() {

	console.log("Current location is "+ );
} */

function mute() { 
  	if (video.muted){
  		console.log("Changing to Unmuted");
  		video.muted = false;
  	}
  	else{
      	console.log("Changing to Muted");
  	}
}

function changeVolume() {
;	console.log("Volume is ");
}
       

function gray() { 

	console.log("In grayscale")
}

function color() {

	console.log("In color") 
}
