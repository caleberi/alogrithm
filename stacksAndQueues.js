class Queue {
    constructor() {
        var head = null;
    }

    isEmpty() {
        return this.head == null;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            return this.head.data;
        }
    }

    append(value) {
        var newNode = {
            data: value,
            next: null
        };

        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        
    }

    remove(){
        if (this.isEmpty()) {
            return null;
        }
        if (this.head !== null  ) {
            this.head =  this.head.next;
        }
    }

}


class Stack{
    constructor(){
        var top = null;
    }

    isEmpty(){
        return this.top == null;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            return this.top.data;
        }
    }

    prepend(value){

        var newNode = {
            data: value,
            next: this.top
        };

        if (this.isEmpty()) {
            this.top = newNode;
            return;
        }

        this.top =  newNode ;

    }

    remove(){
        if (this.isEmpty()) {
            return null;
        }
        this.top = this.top.next;
    }
}


export default  Queue;
