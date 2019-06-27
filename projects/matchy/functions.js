/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    for(var i = 0; i < animals.length; i++) {
        if(name.toLowerCase() === animals[i].name.toLowerCase()) {
            return animals[i];
        } else {
            var notThere = null;
        } 
        
    } return notThere;
    
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for(var i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            animals.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for(var i = 0; i < animals.length; i++) {
        if(name === animals[i].name) {
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    for(var i = 0; i < animals.length; i++) {
        if((animals[i].hasOwnProperty('name') && animals[i].name.length > 0) && (animals[i].hasOwnProperty('species') && animals[i].species.length > 0)) {
            var nameMatch = false;
            for(var j = 0; j < animals.length; j++) {
                if(animal.name === animals[j].name) {
                    nameMatch = true;
                }
            } if (nameMatch === false) {
                animals.push(animal);
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
