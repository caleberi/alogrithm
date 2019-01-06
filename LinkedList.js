class LinkedList {
    constructor() {
        var head = null;        
    }


    append (value){
        var newNode = {
            data: value,
            next: null
        };
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    };

    prepend(value){
        var newNode = {
            data: value,
            next: this.head
        };

        if (this.head == null) {
            this.head = newNode;
            return;
        }
         this.head = newNode; 
    }

    deleteWithValue(value){
        if (this.head == null) {
            return null;
        }

        if (this.head.data == value) {
            this.head = head.next;
            return;
        }

        var current =  this.head;
        while(current.next != null){
            if(current.next.data == value){
                current.next = current.next.next;
                return; 
            }
            current =  current.next;
        }
    }

}

var c =  new LinkedList();
c.append(5)
c.append(7)
c.append(8)
c.append(9)
c.prepend(6)
console.log(c)