function search() {
    	var input, filter, ul, li, imgs, alt, i, txtValue;
    	input = document.getElementById("myInput");
    	filter = input.value.toUpperCase();
    	ul = document.getElementById("doorList");
    	li = ul.getElementsByTagName("li");
		imgs = ul.getElementsByTagName("img");	
    	for (i = 0; i < li.length; i++) {
			alt = imgs[i].alt;
        	if (alt.toUpperCase().indexOf(filter) > -1) li[i].style.display = "";
     		else li[i].style.display = "none";
 	   }
	}