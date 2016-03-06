function Hashtable () {
    this.table = new Array(137);    // 배열의 크기는 소수여야 함. 100보다 작으면 충돌 발생 확률 높아짐
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;

    function simpleHash (data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        console.log("Hash value: ", data, '->', total);
        return total % this.table.length;       
    }

    function put (key, data) {
        // var pos = this.simpleHash(data);
        var pos = this.betterHash(key);
        this.table[pos] = data;
    }

    function get (key) {
        return this.table[this.betterHash(key)];
    }

    function showDistro () {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
            if(this.table[i] != undefined)
                console.log(i + ': ' + this.table[i]);
        };
    }

    function betterHash (string) { // 해시 값 충돌 회피 위해 Horner's method 사용
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);
        };
        total = total % this.table.length;

        if(total < 0)
            total += this.table.length-1;

        // console.log("Hash value: ", string, '->', total);
        return parseInt(total);
    }
}

   function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function genStuData (arr) {
        for (var i = 0; i < arr.length; i++) {
            var num = "";

            for(j=1; j<9; j++)
                num += Math.floor(Math.random() * 10);

            num += getRandomInt(50, 100);
            arr[i] = num;
        };
    }

var names = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new Hashtable();

for(i=0; i<names.length; i++){
    var num = Math.floor(Math.random() * 100);
    hTable.put(names[i], num);
}

hTable.showDistro();

for(i=0; i<names.length; i++){
    console.log(names[i], '->', hTable.get(names[i]));
}