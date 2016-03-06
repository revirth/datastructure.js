/*
이진 트리는 모든 노드의 자식 노드 수가 2개 이하 
이진 검색 트리는 작은 값을 왼쪽 노드에, 큰 값을 오른쪽 노드에 저장

이진검색 트리 탐색
중위 inOrder   - 노드의 오름차순 키 값으로 모든 노드 방문
전위 preOrder  - 루트 노드 방문 - 루트 왼쪽 자식을 중심으로 서브트리 방문, 루트 오른쪽 자식을 중심으로 서브트리 방문
후위 postOrder - 루트 왼쪽 자식을 중심으로 서브트리 방문, 루트 오른쪽 자식을 중심으로 서브트리 방문 - 루트 노드 방문
*/

function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;

    function show() {
        return this.data;
    }
}

function BST () {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;     // 중위
    this.preOrder = preOrder;
    this.postOrder = postOrder;

    function insert (data) {
        var n = new Node(data, null, null);
        if(this.root == null)
            this.root = n;
        else{
            var current = this.root;
            var parent;

            while(true) {
                parent = current;
                if(data < current.data) { // 값이 작으면 left
                    current = current.left;

                    if(current == null) {
                        parent.left = n;
                        break;
                    }
                } else {    // 값이 크면 right
                    current = current.right;

                    if(current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    function inOrder (node) {
        if (node != null) {
            inOrder(node.left);
            process.stdout.write(node.show() + ' ');
            inOrder(node.right);
        };
    }

    function preOrder (node) {
        if (node != null) {
            process.stdout.write(node.show() + ' ');
            preOrder(node.left);
            preOrder(node.right);
        };
    }

    function postOrder (node) {
        if (node != null) {
            postOrder(node.left);
            postOrder(node.right);
            process.stdout.write(node.show() + ' ');
        };
    }

    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;

    function getMin () {
        var current = this.root;
        while(current.left != null)
            current = current.left;

        return current.data;
    }

    function getMax () {
        var current = this.root;
        while(current.right != null)
            current = current.right;

        return current.data;
    }

    function find (data) {
        var current = this.root;
        while(current.data != data) {
            if (data < current.data) 
                current = current.left;
            else
                current = current.right;

            if(current == null) return null;
        }
        return current;
    }

    this.getSmallest = getSmallest;
    this.remove = remove;
    this.removeNode = removeNode;

    function getSmallest(node) {
       if (node.left == null)
          return node;
       else
          return getSmallest(node.left);
    }


    function remove (data) {
        root = removeNode(this.root, data);
    }

    function removeNode (node, data) {
        if(node == null) return null;

        if(data == node.data){
            if(node.left == null && node.right == null) // 자식이 없는 노드
                return null;
            if(node.left == null)   // 왼쪽 자식이 없는 노드
                return node.right;
            if(node.right == null)
                return node.left;   // 오른쪽 자식이 없는 노드

            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        }
        else if(data < node.data){
            node.left = removeNode(node.left, data);
            return node;
        }
        else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
}

var nums = new BST();
for (var i = 0; i < 7; i++) {
    var rnd = Math.floor(Math.random() * 100);
    nums.insert(rnd);
};

function showOrder(nums) {
    process.stdout.write("\n  Inorder traversal: ");
    nums.inOrder(nums.root);

    process.stdout.write("\n Preorder traversal: ");
    nums.preOrder(nums.root);

    process.stdout.write("\nPostorder traversal: ");
    nums.postOrder(nums.root);    
}
showOrder(nums);

var min = nums.getMin();
console.log("\n\nThe minimum value of the BST is: ", min);

var max = nums.getMax();
console.log("The maximum value of the BST is: ", max);

var value = Math.floor(Math.random() * 100);
var found = nums.find(value);
if(found != null)
    console.log("\n### Found", value, "in the BST");
else
    console.log("\n###", value, "was not found in the BST");

console.log("\nRemove the maximum value -", max);    
nums.remove(max);
showOrder(nums);



