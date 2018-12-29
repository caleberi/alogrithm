class Queue {
    constructor(){
        // private variable
        var stackNewestOnTop = [] // instance of a stack object 
        var stackOldestOnTop = [] // instance of a stack object 
        
        this.enqueue = (value)=>{ // add value
            stackNewestOnTop.push(value)
        }
    
        this.peek = ()=>{ // get oldest item
            if (stackNewestOnTop.length == 0) {
                while(stackOldestOnTop.length !==0){
                    stackNewestOnTop.push(stackOldestOnTop.pop())
                }
            }
    
            for(var i = stackNewestOnTop.length-1 ; i > 0;i--){
                var x = stackNewestOnTop.pop();
                stackOldestOnTop.push(x);
            }
            return stackNewestOnTop[0];
        }
    
        this.dequeue = ()=>{ // get oldest item and remove it 
            var i = stackNewestOnTop.length-1 ;
            while(i > 0){
                var x = stackNewestOnTop.pop();
                stackOldestOnTop.push(x);
                i--;
            }
            return stackNewestOnTop.pop();
        }
    
    }
}

