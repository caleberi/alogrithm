function isPalindrome(string){
    var string =    string.toLowerCase();
    var charactersArr =  string.split('');
    var validCharacters =  'abcdefghijklmnopqrstuvwxyz'.split('');

    var letterArr = [];
    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) letterArr.push(char);
    });

    if(letterArr.join('') === letterArr.reverse().join('')) return true;
    else return false;
}

isPalindrome('racecar')