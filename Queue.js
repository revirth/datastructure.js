function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

    function enqueue(element) {
        this.dataStore.push(element);
    }
    function dequeue() {
        return this.dataStore.shift();
    }

    function front() {
        return this.dataStore[0];
    }

    function back () {
        return this.dataStore[this.dataStore.length-1];
    }

    function toString () {
        return this.dataStore.join(', ');
    }

    function empty () {
        return this.dataStore.length === 0;
    }
}

console.log('============ Queue ===========');
var q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log('front :', q.front(), ', back :', q.back());


// 기수정렬
function distribute (nums, queues, n, digit) {
    for (var i = 0; i < n; i++) {
        if (digit == 1)
            queues[nums[i]%10].enqueue(nums[i]);
        else
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    };
}

function collect (queues, nums) {
    var i = 0;
    for (var digit = 0; digit < queues.length; digit++)
        while(!queues[digit].empty())
            nums[i++] = queues[digit].dequeue();
}

function dispArray (arr) {
    console.log(arr.join(" "));
}

console.log('========== radix sort ========='); 
var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
};

var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
};

console.log("Before radix sort:");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\nAfter radix sort:");
dispArray(nums);
