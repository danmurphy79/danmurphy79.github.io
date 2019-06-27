// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-danmurphy');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    //Input: Array
    //Output: Number
    return _.filter(array, function(element, index, collection){
        return element.gender === 'male';
    }).length
    //Constraints: Use filter()
};

var femaleCount = function(array) {
    //Objective: Find number of female customers
    return _.reduce(array, (total, customer) => {
        if(customer.gender === 'female') {
          total += 1;
        } return total;
    }, 0)
};

var oldestCustomer = function(array) {
    //input: array
    let oldest = array[0];
    for(let i = 0; i < array.length; i++) {
        if (oldest.age < array[i].age) {
            oldest = array[i];
        }
    } return oldest.name;
    //loop through the array of objects
        //find the object that has the property age that's also the highest
    //output: string
    //Constraints: None
};

var youngestCustomer = function(array) {
    let youngest = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i].age < youngest.age) {
            youngest = array[i]
        }
    } return youngest.name;
};

var averageBalance = function(array) {
    //Objective: Find the average balance of all customers
    //Input: array
    // Decalre temp array
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
    //Next, I need to access each element and somehow take out the $ and ,
        var num = parseFloat(array[i].balance.replace('$', '').replace(',',''))
        newArray.push(num)
    } 
    let total = 0;
    for(let i = 0; i < newArray.length; i++) {
        total += newArray[i];
    // Add all balances, divide by number of customers
    }
    return (total / newArray.length);
    //Output: Number of customers
};

var firstLetterCount = function(array, letter) {
    return array.filter(name => {
        return name.charAt(0) === letter
    }).length;
    
    //Inputs: Array, letter
//Objective: Find how many customers start with the same given letter
    //declare a new, temp array
//     let temp = [];
//     let temp2 = [];
//     //loop through the array of objects
//     for(let i = 0; i < array.length; i++) {
//             temp.push(array[i].name.toLowerCase());
//     } 
//     for(let j = 0; j < temp.length; j++) {
//         if(temp[j].charAt(0) === letter.toLowerCase()) {
//             temp2.push(temp[j])
//         } 
//     } 
//   return temp2.length;  
};

var friendFirstLetterCount =  function(array, customer, letter) {
//  **Objective**: Find how many friends of a given customer have names that start with a given letter
    //Declare result array
    let result = [];
    //Loop through <array>
    for(let i = 0; i < array.length; i++) {
        // if (array[i].name.toLowerCase() === customer.toLowerCase()) {
            for(let j = 0; j < array[i].friends.length; j++) {
                if(array[i].name.toLowerCase() === customer.toLowerCase() && array[i].friends[j].name.charAt(0).toLowerCase() === letter.toLowerCase()) {
                    result.push(array[i].friends[j].name)
                } 
            } 
        //Loop through friends
    } return result.length;
        //If friend starts with <letter> add to result array
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number
// };
};

var friendsCount = function(array, name) {
//  - **Input**: `Array`, `Name`
   let results = [];
    _.each(array, function(e, i, c){
        _.each(e.friends, function(friend, index, collection){
            if(friend.name === name) {
                results.push(e.name);
            };
        })
    })
    return results;
}
// **Objective**: Find the customers' names that have a given customer's name in their friends list
    //Declare result array
   //filter function?
   
    //Return result array
//  - **Output**: `Array;

// var topThreeTags = function(array) {
// // Objective**: Find the three most common tags among all customers' associated tags
//     // Input**: `Array`
//     //Declare result array
//     let top3Tags = [];
//     let counterObject = {};
//     let tagCount = {
//         tag1: '',
//         tag1Count: 0,
//         tag2: '',
//         tag2Count: 0,
//         tag3: '',
//         tag3Count: 0
//     };
//     //Loop through each customer and put customer tags  in a temp array
//     for(let i = 0; i< array.length; i++) {
//         for(let j = 0; j < array[i].tags.length; j++) {
//          if(counterObject.hasOwnProperty(array[i].tags[j])) { 
//             counterObject[array[i].tags[j]]++; 
//         } else { 
//             counterObject[array[i].tags[j]] = 1; 
//         }  //  temp.push(array[i].tags[j])
//         } 
//         // console.log(counterObject);
//     } 
//     for(var key in counterObject) {
//         if(counterObject[key] >= tagCount.tag1Count) {
//             tagCount.tag3 = tagCount.tag2;
//             tagCount.tag3Count = tagCount.tag2Count;
//             tagCount.tag2 = tagCount.tag1;
//             tagCount.tag2Count = tagCount.tag1Count;
//             tagCount.tag1 = key;
//             tagCount.tag1Count = counterObject[key];
//         }
//     }
//     // console.log(tagCount);
//     top3Tags.push(tagCount.tag1)
//     top3Tags.push(tagCount.tag2)
//     top3Tags.push(tagCount.tag3)//push values  into an array then sort them somehow
//     // console.log(top3Tags);
//     //Somehow loop through the temp array of tags and figure out which has the most, the 
//     // 2nd most and 3rd most
    
//     // Output**: `Array`
//     //Return Result array
//     return top3Tags;
// }

var topThreeTags = function(array) {
    let tagCount = _.reduce(array, (prevVal, customer) => {
        _.each(customer.tags, tag => {
            if (prevVal[tag]) {
                prevVal[tag]++;
            } else {
                prevVal[tag] = 1;
            }
        });
        return prevVal;
    }, {});
    tagCount = _.map(tagCount, (count, tag) => {
        return [tag, count];
    });
    tagCount.sort((a, b) => b[1] - a[1]);
    tagCount = _.first(tagCount, 3);
    return _.map(tagCount, tag => tag[0]);
};

var genderCount = function(array) {
    let count = _.reduce(array, (prevVal, customer) => {
        
            if (prevVal[customer.gender]) {
                prevVal[customer.gender]++;
            } else {
                prevVal[customer.gender] = 1;
            }
        
        return prevVal;
  
    }, {});
    
    return count;
};
//     let totalMales = [];
//     let totalFemales = [];
//     let totalTrans = [];
//     _.each(array, function(e, i, c) {
//         if(e.gender === 'male') {
//             totalMales.push(e.name);
//         } else if (e.gender === 'female') {
//             totalFemales.push(e.name);
//         } else {
//             totalTrans.push(e.name);
//         } 
//         // console.log(totalMales);
//         // console.log(totalFemales);
//         // console.log(totalTrans);
//     });
//     let grandTotal = {
//         male: totalMales.length,
//         female: totalFemales.length,
//         transgender: totalTrans.length
//     }
//     return grandTotal;
// };

//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     transgender: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
