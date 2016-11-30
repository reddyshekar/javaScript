var arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113] ;

function evenNumbers(arr, index) {
  
 
  if (index === arr.length){
		
		return arr;
    }
  if (index === undefined) {
		index = 0;
		return evenNumbers(arr,index);
	
	
	}
	 if (arr[index] % 2 === 1) {
		arr.splice(index,1);
	
		return evenNumbers(arr, index);
	}
	return evenNumbers(arr, index+1);
}

console.log(evenNumbers(arrList));