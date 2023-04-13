const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
let out = ""
for (var i = 0; i < this; i++) {
	out += alphabet[Math.floor(Math.random() * alphabet.length)]
}
var encMessage = function (message, key) {
	var output = "";
	let nText = []
	let kText = []
	for (let i of message) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}
	for (let i of key) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
	}
	for (let i in nText) {
		output += alphabet[(nText[i] + kText[i]) % 26]
	}
	return output;
}
var decMessage = function (message, key) {
	var output = "";
	let nText = []
	let kText = []
	for (let i of message) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}
	for (let i of key) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
		let out = ""
	}
	for (let i in nText) {
		output += alphabet[(nText[i] - kText[i]) < 0 ? 26 + (nText[i] - kText[i]) : (nText[i] - kText[i]) % 26]
	}
	return output;
}
function vceButtonFunction(){
	var key = document.getElementById('key').value;
	var message = document.getElementById("inmessage").value;
	if(key == "" || message == ""){
		alert("Enter the key and message to Encrypt or Decrypt!");
		return;
	}
	if (message.length != key.length) {
		alert("Text and Key have to be the same length.");
		return;
	}
	var result = encMessage(message, key);
	document.getElementById("result").value = result;
}
function vcdButtonFunction(){
	var key = document.getElementById('key').value;
	var message = document.getElementById("inmessage").value;
	if(key == "" || message == ""){
		alert("Enter the key and message to Encrypt or Decrypt!");
		return;
	}
	if (message.length != key.length) {
		alert("Text and Key have to be the same length.");
		return;
	}
	var result = decMessage(message, key);
	document.getElementById("result").value = result;
}