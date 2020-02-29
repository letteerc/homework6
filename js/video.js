var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() {
	video.pause(); 
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = (video.playbackRate) * 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = (video.playbackRate) * 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if(video.ended){
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	if (video.muted){
		video.muted = false;
  		console.log("Unmuted");
  		document.getElementById("mute").innerHTML = "Mute"
  	}
  	else{
  		video.muted = true;
      	console.log("Muted");
      	document.getElementById("mute").innerHTML = "Unmute"

  	}
}

function changeVolume() {
	video.volume = document.querySelector("#volumeSlider").value/100;
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Volume is "+ 100 * video.volume + "%");
}
       

function gray() { 
	document.getElementById("myVideo").className = "grayscale";
	console.log("In grayscale");
}

function color() {
	document.getElementById("myVideo").className = "";
	console.log("In color");
}
