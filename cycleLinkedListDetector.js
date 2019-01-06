class Queue {
    constructor() {
        var head = null;
    }
    node(value){
        return  {
            data: value,
            next: null
        };
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
        var newNode = this.node(value)

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

    remove() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head !== null) {
            this.head = this.head.next;
        }
    }

}


class Stack {
    constructor() {
        var top = null;
    }

    isEmpty() {
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

    prepend(value) {

        var newNode = {
            data: value,
            next: this.top
        };

        if (this.isEmpty()) {
            this.top = newNode;
            return;
        }

        this.top = newNode;

    }

    remove() {
        if (this.isEmpty()) {
            return null;
        }
        this.top = this.top.next;
    }
}





class hasCycle extends Queue {
    constructor() {
        super();
        this.hasCycleBoolean = () => {
            if (this.isEmpty()) {
                return false;
            }
            this.node.fast = this.head.next;
            this.node.slow = this.head;
            
            while (this.node.fast !== null && this.node.fast.next !== null && this.node.slow !== null) {
                if (this.node.fast === this.node.slow ) {
                    return true;
                }
                this.node.fast = this.node.fast.next.next;
                this.node.slow = this.node.slow.next;
            }
            return false;
        }
    }
};


