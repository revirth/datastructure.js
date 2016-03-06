function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function CircularLinkedList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;

    function find(item){
        var currNode = this.head;
        while(currNode.element != item)
            currNode = currNode.next;

        return currNode;
    }

    function insert(newElement, item){
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    function remove(item){
        var currNode = this.find(item);
        if(currNode != null){
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;

            currNode.previous = null;
            currNode.next = null;
        }
    }

    function display () {
        var currNode = this.head;
        var dispNodes = "";

        while(currNode.next != null && currNode.next.element != 'head'){
            dispNodes += currNode.next.element + ' > ';
            currNode = currNode.next;
        }
        console.log(dispNodes);
    }

    function findPrevious (item) {
        var currNode = this.head;
        while(currNode != null && currNode.next.element != item)
            currNode = currNode.next;

        return currNode;
    }
}


var cities = new CircularLinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

