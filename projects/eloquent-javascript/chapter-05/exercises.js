// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //Use reduce method and the concat method to 'flatten' an array of arrays into a single array
  //that has all the elements of the original array
return array.reduce((result, element) => result.concat(element), []);
  
} 

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  //takes 4 arguments: value, test function, update function, body function
  for(let i = value; test(i); i = update(i)) {
    body(i)
  }
  //loop through (what?)
    //call <test> on current <value>
      //stop loop if it returns false
    //then call <body> function, giving it the current <value>
    //call update function to create a new value and start from the beginning

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicateFunc) {
  for(let i = 0; i < array.length; i++) {
    if(!predicateFunc(array[i])) {
      return false;
    }
  }return true;//Takes an array and a predicate function as parameters
  //Return false if one element in the array when the given function returns false
  //Else return true   
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}


function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    if(script) {
      return script.direction;
    } else {
      return 'none';
    }
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
