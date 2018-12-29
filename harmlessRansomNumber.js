function harmlessRansomNumber(noteText,magazineText){
    var noteArr =  noteText.split(' ');
    var magazineArr =  magazineText.split(' ');

    var hashTable  = {};

    magazineArr.forEach(word => {
        if(!hashTable[word]){
            hashTable[word]  =  0;
        }
        hashTable[word] += 1; 
    });

   var noteIsPossible =  true;
   noteArr.forEach(word=>{
       if(hashTable[word]){
           hashTable[word]--;
           if(hashTable[word]<0) noteIsPossible = false;
       }
       else{
           noteIsPossible = false;
       }
   })

   return noteIsPossible;
}


harmlessRansomNumber('this is me' ,' this is were you met me')