class Trees{
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;        
    }

    insert(value){
        if(value <= this.data){
            if (!this.left) {
                this.left =  new Trees(value);
            }else{
                this.left.insert(value)
            }
        }else{
            if (!this.right) {
                this.right =  new Trees(value);
            }else{
                this.right.insert(value)
            }
        }
    }

    contain(value){
        if (value == this.data) {
            return true
        }else if(value < this.data){
            if(this.left == null){
                return false
            }else{
                return this.left.contain(value)
            }
        }else {
            if(this.right == null){
                return false
            }else{
                return this.right.contain(value)
            }
        }
    }


    printInOrder(){
        if (this.left !== null) {
            this.left.printInOrder()
        }
        console.log(this.data);
        if (this.right !== null) {
            this.right.printInOrder()
        }
    }
}

