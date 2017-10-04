
function edit() { 

	var newArtist = document.getElementById("newartist").value;
	var newTitle = document.getElementById("newtitle").value;

	document.getElementById("artist").innerHTML = newArtist;
	document.getElementById("title").innerHTML = newTitle;

}


function editVid() { 

	var newTitle = document.getElementById("newtitle").value;

	document.getElementById("title").innerHTML = newTitle;

}
