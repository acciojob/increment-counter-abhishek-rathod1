//your JS code here. If required.

let count = 0;
function increment() {
	alert(count);
	count++;
	let counterP = document.getElementById("counter");
	counterP.textContent = count;
}
