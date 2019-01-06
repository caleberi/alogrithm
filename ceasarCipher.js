function caesarCipher(str,key){

    key = key % 26;

    var lowerCaseString =  str.toLowerCase();
    var alphabet =  'abcdefghijklmnopqrstuvwxyz'.split('');
    var msg =  '';

    for (var i = 0; i < lowerCaseString.length; i++) {
        var currentLetter =  lowerCaseString[i];
        if(currentLetter === ' '){
            msg  += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex =  currentIndex + key;
        if (newIndex > 25 ) newIndex =  newIndex - 26;
        if (newIndex < 0 ) newIndex =  26 + newIndex ;

        if(str[i] === str[i].toUpperCase()){
            msg  += alphabet[newIndex].toUpperCase();
        }
        else{
            msg += alphabet[newIndex]; 
        }
    }

    return msg;
   
}


console.log(caesarCipher('xlmw mw gepif',4))
