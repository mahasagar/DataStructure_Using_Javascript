// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data ,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(record){
        this.head = new Node(record,this.head);
    }
    size(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return  this.head;
    }
    getLast(){
        let node = this.head;
        let last = null;
        while(node){
            if(!node.next){
                last = node;
            }
            node = node.next;
        }
        return last;
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head || !this.head.next){
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while(node.next){
            prev = node;
            node = node.next
        }
        prev.next = null;
    }

    insertLast(record){
        let newNode = new Node(record);
        let last = this.getLast();
        if(last){
            last.next = newNode;
        }else{
            this.head = newNode;
        }

        // if(!this.head){
        //     this.head = newNode;
        //     return;
        // }
        // let node = this.head;
        // while(node.next){
        //     node = node.next
        // }
        // node.next = newNode;
    }

    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index){
        if(!this.head){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        let counter = 1;
        let prev = this.head;
        let node = this.head.next;
        while(node){
            if(counter === index){
                prev.next = node.next;
                return node;
            }
            counter++;
            prev = node;
            node = node.next;
        }
        return null;
    }

    insertAt(data,index){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let prev = this.head;
        if(index === 0 && this.head.next){
            this.head = newNode;
            newNode.next = prev;
            return null;
        }
        let counter = 1;
        prev = this.head;
        let node = this.head.next;
        while(prev){
            if(counter === index){
                prev.next = newNode;
                newNode.next = node;
                return newNode;
            }
            counter++;
            prev = node;
            node = node ? node.next : null;
        }
        return null;
    }

    forEach(fn){
        let node = this.head;
        while(node){
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){  
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
