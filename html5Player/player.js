$(document).ready(function(){
	playerSettings();
});
function playerSettings(){
	
	$("#prevBtn").click(function(){
		readMP3(--idxPlaying);	  
	});

 $("#nextBtn").click(function(){
 	readMP3(++idxPlaying);
 });


// $("#playBtn,#pauseBtn").click(function(){

// 	if($("#playBtn").is(":visible")){
// 		$("#player").
// 	}else if($("#pauseBtn").is(":visible")){

// 	}

// });



}