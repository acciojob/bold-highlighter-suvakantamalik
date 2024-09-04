let hText = document.querySelectorAll('strong');
function highlight() {
    //Write your code here
	hText.forEach(text => {
		text.style.color = "green";
	});
}


function return_normal() {
    //Write your code here
	hText.forEach(text => {
		text.style.color = "black";
	});
}
