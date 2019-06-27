////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //takes three arguments, start, end and step
  const result = [];//declare an array
  if(start === end) {
    return [];
  }
  if(step > 0) {  //if step is given
      for(let k = start; k <= end; k += step) { 
      result.push(k);
      }
    } else if(step < 0) {  //if step is given
      for(let j = end; j<= start; j += step) { 
      result.push(j);
    }
    } else { 
    for(let i = start; i<= end; i++) {
      result.push(i);
      }
    }
  return result;
  }

  //return the array


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
//takes one argument, an array
  let total = 0;
  if(array.length === 0) {
    return 0;
  } else {
    for(let i = 0; i < array.length; i++) {
    var newSum = total+=array[i];
  }
    // for each number, add it to the previous result
  //return the sum of the numbers in the array
  return newSum;
}
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
//Takes an array as its argument
  const result = []; //Declare result array
  //Loop through the array
  for(let i = 0; i < array.length; i++) {
    //Use .unshift method to add the items to the result array
    result.unshift(array[i]);
  } console.log(result);
  //returns the same array with the items reversed
  //Return result array
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) { //How do I loop over half of the array?
    //swap elements at array[i] with the element at array.length - 1 - i;
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  } return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

var list = null;
for(let i = array.length -1; i >= 0; i--) {
  list = { value: array[i], rest: list }
} return list;
}


/*helper:
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
//Input: list

//Declare empty array
  var result = [];
  for(let node = list; node; node = node.rest) {
    result.push(node.value)
  }//push values?
//Output: array
//Tip: for(let node = list; node; node = node.rest)
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
//Input: 2 arguments, element and list
  //Add element to the front of the input list
  return {value, rest: list};
//Output: list
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
//Takes 2 arguments, list and number
  //If there is no list, return undefined
  if(!list) {
    return undefined;
  //If number is 0, assign to value of head node
  } else if(number === 0) {
    return list.value;
  } else return nth(list.rest, number -1)
//Returns value property at the given position in the list, with zero referring to first element.
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
//Takes two arguments, both values
  //Tip: remember that null also returns object when using 'typeof'
  if(val1 === val2) {
    return true;
  }
  if(typeof val1 !== 'object' || val1 === null || typeof val2 !== 'object' || val2 === null) {
    return false;
  }
  let val1Keys = Object.keys(val1);
  let val2Keys = Object.keys(val2);
  if(val2Keys.length !== val1Keys.length) {
    return false;
  }
  for (let key of val1Keys) {
    if (!val2Keys.includes(key) || !deepEqual(val1[key], val2[key])){
      return false;
    } 
  }

  return true;
}
    
  
//Returns a boolean
  //true only if they are the same value or are objects with the same properties
  //where the values of the properties are equal when compared with a recursive 
  //call of deepEqual
//Object.keys us useful when looping through the object


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
