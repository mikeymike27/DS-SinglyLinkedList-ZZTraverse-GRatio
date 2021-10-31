class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(e) {
        let node = new Node(e)
        // if(this.head == null) {
        //     this.head = node
        // } else {
        //     let tail = this.head
        //     while(tail.next != null) {
        //         tail = tail.next
        //     }
        //     tail.next = node
        // }

        // this.size++

        let currrentNode = this.head
        // if list empty
        if(!currrentNode) {
            this.head = node
            this.size++
            return node
        }
        // if list !empty
        while(currrentNode.next) {
            currrentNode = currrentNode.next
        }
        currrentNode.next = node;
        this.size++
        return node
    }

    insertAtPosition(position, nodeToInsert) {
        // function search(position) {
        //     let counter = 0
        //     let node = this.head
        //     while(node != null) {
        //         if(counter === position) {
        //             return position
        //         } else {
        //             counter++
        //             node = node.next
        //         }
        //     }
        //     return null
        // }

        // search(position)

        // let node = new Node(nodeToInsert)
        // if(this.head == null) {
        //     this.head = node
        // } else if(position == 0) {
        //     node.next = this.head
        //     this.head = node
        // } else if(position == null) {
        //     this.add(nodeToInsert)
        // } else {
        //     const previous = position - 1
        //     node.next = previous.next
        //     previous = node
        // }

        // this.size++

    }

    remove(val) {
        let node = this.head
        let prev

        // if(node.value === val) {
        //     return node.next
        // }

        while(node.value !== val) {
            prev = node
            node = node.next
        }

        if(node.value === val) {
            prev.next = node.next
        }
        this.size--
        return node
    }

    search(value) {
        // let pointerNode = this.head
        // while(pointerNode != null) {
        //     if(pointerNode.value === value) {
        //         return pointerNode
        //     } else {
        //         pointerNode = pointerNode.next
        //     }
        // }
        // return null

        let node = this.head
        while(node !== value && node.value !== value) {
            node = node.next
        }
        return node.value
    }

    isEmpty() {
        return this.size == 0 ? true : false
    }
}

let myList = new SinglyLinkedList()
myList.add(5)
myList.add(3)
myList.add(7)
myList.add(4)

console.log(myList)
myList.remove(7)
console.log(myList)
// console.log(myList.search(1))
