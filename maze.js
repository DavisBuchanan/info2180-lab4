//Exercise 1
window.onload = function() {
	function hitWall() {
		document.getElementById("boundary1").className = "boundary youlose";
	}
	document.getElementById("boundary1").addEventListener("mouseover",hitWall);
}


