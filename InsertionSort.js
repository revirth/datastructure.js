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

	this.insertionSort = insertionSort;
	function insertionSort() {
	   var temp, inner;
	   for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
	      temp = this.dataStore[outer];
	      inner = outer;

         var count = 0;
	      while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
	         this.dataStore[inner] = this.dataStore[inner-1];
	         --inner;
            count++;
	      }

	      this.dataStore[inner] = temp;
	      console.log('[' + outer + '] ' + temp + ' > '  + this.dataStore, '['+inner+']', count, 'times');
	   }
	}
}

var mynums = new CArray(10);
mynums.setData();
console.log(mynums.toString());
mynums.insertionSort();
console.log(mynums.toString());
