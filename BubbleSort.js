/*
버블 정렬
- 가장 느린 정렬 알고리즘 가운데 하나지만 가장 구현이 쉽다?
배열의 데이터를 여러번 반복적으로 탐색하며 인접한 값을 서로 비교해 왼쪽이 오른쪽보다 크면 서로 바꾼다
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
         console.log(outer + ' > ' + this.toString());
      }
   }  

}

var mynums = new CArray(10);
mynums.setData();
// console.log(mynums.toString());
mynums.bubbleSort();
// console.log(mynums.toString());
