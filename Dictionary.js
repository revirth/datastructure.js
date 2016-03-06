function Dictionary () {
    this.dataStore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;

    function add(key, value) {
        this.dataStore[key] = value;
    }

    function find (key) {
        return this.dataStore[key];
    }

    function remove (key) {
        delete this.dataStore[key];
    }

    function showAll() {
        var sorted = (function(s){var t={};Object.keys(s).sort().forEach(function(k){t[k]=s[k]});return t})(this.dataStore);

        for(var k in sorted)
            console.log(k, '->', sorted[k]);
    }

    function count () { // 문자열 key로 이뤄진 배열에선 .length 프로퍼티가 오작동
        var n = 0;

        for(var key in this.dataStore)
            n++;

        return n
    }

    function clear () {
        for(var key in this.dataStore)
            delete this.dataStore[key];
    }
}

var pbook = new Dictionary();
pbook.add("Mike", '123');
pbook.add("David", '345');
pbook.add("Cynthia", '456');
console.log("Number of entries:", pbook.count());
console.log("David's extension:", pbook.find('David'));
pbook.showAll();

console.log();
pbook.clear();
console.log("Number of entries ", pbook.count());