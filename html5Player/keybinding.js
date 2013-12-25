
$(document).ready(function(){

	$(document).bind('keydown', 'space', function assets() {
	  if(document.getElementById("player").paused){
	    document.getElementById("player").play();
	  }else{
	    document.getElementById("player").pause();
	  }
	                       return false;
	                   });


	$(document).bind('keydown', 'Ctrl+right', function assets() {
			readMP3(++idxPlaying);	  
	                       return false;
	                   });


	$(document).bind('keydown', 'Ctrl+left', function assets() {
			readMP3(--idxPlaying);	  
	                       return false;
	                   });

	$(document).bind('keydown', 'Ctrl+return', function assets() {
			readMP3(idxPlaying);	  
	                       return false;
	                   });

// $(document).bind('keydown', 'Ctrl+home', function assets() {
// 			readMP3(0);	  
// 	                       return true;
// 	                   });

// $(document).bind('keydown', 'Ctrl+end', function assets() {
// 			readMP3(playListArray.length-1);	  
// 	                       return true;
// 	                   });

$(document).bind('keydown', 'Ctrl+insert', function assets() {
			$("#fileSelect").click();
	                       return false;
	                   });


	
});