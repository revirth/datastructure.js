/*
삽입 정렬
- 사람이 자료를 숫자나 문자순으로 정렬할 때 사용하는 방법과 비슷
- 외부 루프에서 선택한 요소가 내부 요소에서 선택한 요소보다 작으면 배열 요소를 오른쪽으로 시프트해서 내부 루프 요소를 삽입할 공간을 마련한다.
*/

function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.swap = swap;

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }


   function setData() {
      for (var i = 0; i < this.numElements; ++i) {
         this.dataStore[i] = Math.floor(Math.random() * 
                             (this.numElements+1));
      }
   }

   function clear() {
      for (var i = 0; i < this.dataStore.length; ++i) {
         this.dataStore[i] = 0;
      }
   }

   function insert(element) {
      this.dataStore[this.pos++] = element;
   }

   function toString() {
      var retstr = "";
      for (var i = 0; i < this.dataStore.length; ++i) {
         retstr += this.dataStore[i] + " ";
         if (i > 0 && i % 10 == 0) {
            retstr += "\n";
         }
      }
      return retstr;
   }

   function swap(arr, index1, index2) {
      var temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
   }

   this.bubbleSort = bubbleSort;
   function bubbleSort() {
      var numElements = this.dataStore.length;
      var temp;
      for (var outer = numElements; outer >= 2; --outer) {
         for (var inner = 0; inner <= outer-1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner+1]) {
               swap(this.dataStore, inner, inner+1);
            }
         }
         // console.log(outer + ' > ' + this.toString());
      }
   }  

	this.selectionSort = selectionSort;
	function selectionSort() {
	   var min, temp;
	   for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
	      min = outer;
	      for (var inner = outer + 1;  inner <= this.dataStore.length-1; ++inner) {         
	         if (this.dataStore[inner] < this.dataStore[min]) {
	            min = inner;
	         }
	      }
	      swap(this.dataStore, outer, min);
	      // console.log(outer + ' > ' + this.toString(), this.dataStore[min]);
	   }
	}

	this.insertionSort = insertionSort;
	function insertionSort() {
	   var temp, inner;
	   for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
	      temp = this.dataStore[outer];
	      inner = outer;
	      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
	         this.dataStore[inner] = this.dataStore[inner-1];
	         --inner;
	      }

	      this.dataStore[inner] = temp;
	      // console.log(outer + ' > ' + this.dataStore, temp);
	   }
	}
}

var mynums = new CArray(10000);
mynums.setData();
console.time('bubbleSort');
mynums.insertionSort();
console.timeEnd('bubbleSort');

console.time('selectionSort');
mynums.insertionSort();
console.timeEnd('selectionSort');

console.time('insertionSort');
mynums.insertionSort();
console.timeEnd('insertionSort');
