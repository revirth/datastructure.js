function Hashtable () {
    this.table = new Array(137);    // 배열의 크기는 소수여야 함. 100보다 작으면 충돌 발생 확률 높아짐
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    // this.get = get;

    function simpleHash (data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        console.log("Hash value: ", data, '->', total);
        return total % this.table.length;       
    }

    function put (data) {
        // var pos = this.simpleHash(data);
        var pos = this.betterHash(data);
        this.table[pos] = data;
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

        return parseInt(total);
    }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new Hashtable();
for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
};
hTable.showDistro();
