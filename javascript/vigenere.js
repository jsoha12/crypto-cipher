function encrypt(plaintext, k)
{
    if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
ciphertext="";
for(i=0; i<plaintext.length; i++){ 
    ciphertext += String.fromCharCode((((plaintext.charCodeAt(i)-97) + (k.charCodeAt(i%k.length)-97)+26)%26)+97); 
} 
return ciphertext; 
}

function decrypt(ciphertext, k)
{
    if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
    plaintext="";
    for(i=0; i<ciphertext.length; i++){ 
        plaintext += String.fromCharCode((((ciphertext.charCodeAt(i)-97) - (k.charCodeAt(i%k.length)-97)+26)%26)+97); 
    } 
    return plaintext; 
}

function vceButtonFunction() {
        var key = document.getElementById('key').value.toLowerCase().replace(/[^a-z]/g, ""); ;
        var message = document.getElementById('inmessage').value.toLowerCase().replace(/[^a-z]/g, ""); ;
        if(key == "" || message == ""){
            alert("Please enter key and message to de ciphered/deciphered!");
            return;
          }
        var result = encrypt(message, key);
        document.getElementById('result').value = result;
    }
    
function vcdButtonFunction(){
        var key = document.getElementById('key').value;
        var message = document.getElementById('inmessage').value;
        if(key == "" || message == ""){
            alert("Please enter key and message to de ciphered/deciphered!");
            return;
          }
        var result = decrypt(message, key);
        document.getElementById('result').value = result;
    }
