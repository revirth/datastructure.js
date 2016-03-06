function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function DoublyLinkedList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findLast = findLast;
	this.dispReverse = dispReverse;

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

		while(currNode.next != null){
			dispNodes += currNode.next.element + ' > ';
			currNode = currNode.next;
		}
		console.log(dispNodes);
	}

	function findLast() {
		var currNode = this.head;
		while(currNode.next != null)
			currNode = currNode.next;

		return currNode;
	}

	function dispReverse () {
		var currNode =  ();
		var dispNodes = "";

		while(currNode.previous != null){
			dispNodes += currNode.next.element + ' > ';
			currNode = currNode.previous;
		}
		console.log(dispNodes);
	}
}


var cities = new DoublyLinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.dispReverse();


