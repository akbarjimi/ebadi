
// 	var firs_pic = document.getElementById("pics_panel").getElementByTagName("img")
// var show_pics = document.getElementById("show_pics");
// show_pics.src=firs_pic.scr;

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("pics_panel").addEventListener('click', function(event) {
    if (event.target.tagName.toUpperCase() == 'IMG') {
    
    var show_pics = document.getElementById("show_pics");
    var show_movies=document.getElementById("show_movies");
    var media_text=document.getElementById("media_text");

	document.getElementById("media_text").style.visibility = 'visible';
    document.getElementById("media_text_panel").style.visibility = 'visible';
  
             var video = document.getElementById("show_movies");  
                video.pause();
                    
    show_movies.style.visibility = 'hidden';
    show_pics.style.visibility = 'visible';
            

    show_pics.src=event.target.src;

    media_text.innerHTML=event.target.alt;
    }
  });

document.getElementById("movies_panel").addEventListener('click', function(event) {
    if (event.target.tagName.toUpperCase() == 'IMG') {
    
    var show_pics = document.getElementById("show_pics");
    var show_movies=document.getElementById("show_movies");
    
    document.getElementById("media_text").style.visibility = 'hidden';
    document.getElementById("media_text_panel").style.visibility = 'hidden';
    
    show_pics.style.visibility = 'hidden';
    show_movies.style.visibility = 'visible';
	
 	show_movies.setAttribute("src", event.target.alt);

    }
  });

});