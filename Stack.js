function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
//    this.length = length;
    this.clear = clear;

    function push(element) {
        this.dataStore[this.top++] = element;
    }
    function pop() {
        return this.dataStore[--this.top];
    }
    function peek() {
        return this.dataStore[this.top-1];
    }
//    function length() {
//        return this.top;
//    }
    function clear() {
        this.top = 0;
    }
    Object.defineProperty(this, 'length', {
        get: function() {
            return this.top;
        }
    });
}

var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
console.log('length :', s.length, ', peek :', s.peek());

console.log('=============== pop ==============');
var popped = s.pop();
console.log('The popped element is : ', popped, ', peak :', s.peek());
s.push('Cynthia');
console.log(' peak :', s.peek());

console.log('============== clear =============');
s.clear();
console.log('length :', s.length, ', peek :', s.peek());
s.push('Clayton');
console.log(' peak :', s.peek());

// 회문 Palindrom (앞으로 읽으나 뒤로 읽으나 같은 단어, 구절, 숫자)
function isPalindrome(word) {
    var s = new Stack();
    for(i=0; i<word.length; i++) {
        s.push(word[i]);
    }
    var rword = "";
    while(s.length > 0) {
        rword += s.pop();
    }
    return word == rword;
}

console.log('=========== Palindrome ===========');
var words = ['hello', 'racecar', '이효리', '1001'];
words.forEach (function(word) {
    if( isPalindrome(word) )
        console.log(word, 'is a palindrome')
    else
        console.log(word, 'is not a palindrome')
});

// 재귀
function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n-1);
}
console.log('============ factorial ===========');
console.log( factorial(5) ); // 120

function factorialStack(n) {
    var s = new Stack();
    while(n > 1) s.push(n--);

    var product = 1;
    while(s.length > 0) product *= s.pop();

    return product;
}
console.log( factorialStack(5) ); // 120
