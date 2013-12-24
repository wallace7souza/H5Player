function playerSettings(){
	
	$("#prevBtn").click(function(){
		if(idxPlaying==0){
			return;
		}else{
			 readMP3(--idxPlaying);
		}
	});

 $("#nextBtn").click(function(){
 	if(idxPlaying==playListArray.length){
			return;
		}else{
			 readMP3(++idxPlaying);
		}
 });


$("#playBtn,#pauseBtn").click(function(){

	if($("#playBtn").is(":visible")){
		$("#player").
	}else if($("#pauseBtn").is(":visible")){

	}

});



}