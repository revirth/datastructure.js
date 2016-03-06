/*
선택 정렬
- 배열의 처음 요소부터 차례로 값을 비교해 가장 작은 요소를 배열의 첫번째로
- 다음에는 두번째 자리에 올 요소를 정렬
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
	      console.log(outer + ' > ' + this.toString(), this.dataStore[min]);
	   }
	}
}

var mynums = new CArray(10);
mynums.setData();
// console.log(mynums.toString());
mynums.selectionSort();
// console.log(mynums.toString());
