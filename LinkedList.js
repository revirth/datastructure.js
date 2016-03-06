function Node(element) {
	this.element = element;
	this.next = null;
}

function LinkedList() {
	this.head = new Node("head");
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
		current.next = newNode;
	}

	function remove(item){
		var prevNode = this.findPrevious(item);
		if(prevNode != null)
			prevNode.next = prevNode.next.next;
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

	function findPrevious (item) {
		var currNode = this.head;
		while(currNode != null && currNode.next.element != item)
			currNode = currNode.next;

		return currNode;
	}


}

var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

