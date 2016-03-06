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

        console.log("Hash value: ", string, '->', total);
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

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);

console.log('Student data:');
for (var i = 0; i < students.length; i++) {
    console.log(students[i].substring(0, 8), students[i].substring(9));
};

console.log('\nData distribution:');
var hTable = new Hashtable();
for (var i = 0; i < students.length; i++) {
    hTable.put(students[i]);
};
hTable.showDistro();
