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

function randomize() {
	var imgArr = document.getElementsByTagName("img");
	var liArr =  document.getElementsByClassName("doorItem");
	for (i = 0; i < imgArr.length; i++) {
		var randWidth = Math.floor((Math.random() + 0.2)* 200);
		imgArr[i].style.width = randWidth + "px";
		imgArr[i].style.height = "auto";
		randWidth = Math.floor((Math.random()+0.1)* 60);
		liArr[i].style.padding = randWidth + "px";
	}
	var text = document.getElementsByTagName("p");
	var text1 = document.getElementsByTagName("h1");
	var text2 = document.getElementsByTagName("a");
	for (i = 0; i < text.length; i++) {
		text[i].style.color = "#FAFAFA";
	} for (i = 0; i < text1.length; i++) {
		text1[i].style.color = "#FAFAFA";
	} for (i = 0; i < text2.length; i++) {
		text2[i].style.color = "#FAFAFA";
	}
	document.body.style.background = "#0d0d0d";
	return;
}
