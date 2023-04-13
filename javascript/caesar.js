var cceShift = function (plaintext, key) {
    ciphertext = "";   
    var re = /[a-z]/;
    for(i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key)%26 + 97); 
        else ciphertext += plaintext.charAt(i); 
    } 
    return ciphertext; 
}
var ccdShift = function (ciphertext, key) {
    plaintext = "";    var re = /[a-z]/;
    for(i=0; i<ciphertext.length; i++){ 
        if(re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - key)%26 + 97); 
        else plaintext += ciphertext.charAt(i); 
    } 
    return plaintext; 
}
function cceButtonFunction(){
    var key = parseInt(document.getElementById("key").value);
    var message = document.getElementById('inmessage').value.toLowerCase();;
    if(key == "" || message == ""){
        alert("Enter the key and The message to be Encrypt or Decrypt");
        return;
    }

    var result = cceShift(message, key);
    document.getElementById('result').value = result;
}
function ccdButtonFunction(){
    var key = document.getElementById('key').value;
    var message = document.getElementById('inmessage').value;
    if(key == "" || message == ""){
        alert("Enter the key and The message to be Encrypt or Decrypt");
        return;
    }
    var result = ccdShift(message, key);
    document.getElementById('result').value = result;
 }
