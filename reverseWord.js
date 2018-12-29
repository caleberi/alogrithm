function reverseWord(word) {
    var splitWord =  word.split(' ');
    var reversedArr =  [];
    splitWord.forEach(word => {
        var newWord = '';
        for(var i = word.length-1 ; i >= 0;i--){
            newWord += word[i];
        }
        reversedArr.push(newWord);
        return;
    });
    

    var reversedString =  reversedArr.join(' ');
    return reversedString;
}

console.log(reverseWord('this is a string'))
