function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;             // 합집합
    this.intersect = intersect;     // 교집합
    this.subset = subset;           // 부분집합 여부
    this.difference = difference;   // 차집합
    this.show = show;
    this.contains = contains;

    function size() {
        return this.dataStore.length;
    }

    function add(data) {
        if(this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        }
        return false;
    }

    function remove(data) {
        var pos = this.dataStore.indexOf(data);
        if(pos > -1){
            this.dataStore.splice(data, 1);
            return true;
        }
        return false;
    }

    function show() {
        return this.dataStore;
    }

    function contains(data){
        return this.dataStore.indexOf(data) > -1;
    }

    function union (set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++)
            tempSet.add(this.dataStore[i]);

        for (var i = 0; i < set.dataStore.length; i++)
            tempSet.dataStore.push(set.dataStore[i]);

        return tempSet;
    }

    function intersect (set) {
        var tempSet = new Set();
        for(i=0; i<this.dataStore.length; i++)
            if(set.contains(this.dataStore[i]))
                tempSet.add(this.dataStore[i]);

        return tempSet;
    }

    function subset (set) {
        if(this.size() > set.size()) 
            return false;
        else{
            for(i=0; i<this.dataStore.length; i++){
                var member = this.dataStore[i];
                if(!set.contains(member))
                    return false;
            }
        }
        return true;
    }

    function difference (set) {
        var tempSet = new Set();
        for(var i=0; i<this.dataStore.length; i++)
            if(!set.contains(this.dataStore[i]))
                tempSet.add(this.dataStore[i]);

        return tempSet;
    }
}

var names1 = ["David", "Jennifer", "Donnie", "Raymond", 'QQ', ];
var names2 = ["Cynthia", "Mike", "Clayton", "Danny", "Jonathan", 'QQ', ];
var set = new Set();

for(i=0; i<names1.length; i++)
    set.add(names1[i]);

if(set.add("Mike"))
    console.log("Mike is added");
else
    console.log("Can't add Mike");

if(set.remove("Alisa"))
    console.log("Alisa is Removed");
else
    console.log("Alisa is not Removed");

var dmp = new Set();
for(i=0; i<names2.length; i++)
    dmp.add(names2[i]);

console.log('dmp', dmp.show());

var sum = set.union(dmp);
console.log('union', sum.show());

var its = set.intersect(dmp);
console.log('intersect', its.dataStore);

if(dmp.subset(sum)) console.log('DMP is a subset of SUM');
else                console.log('DMP is not a subset of SUM');
dmp.add('Shirley');
if(dmp.subset(sum)) console.log('DMP is a subset of SUM');
else                console.log('DMP is not a subset of SUM');

var diff = new Set();
diff = set.difference(dmp);
console.log(set.show(),'difference', dmp.show(), '=>', diff.show());