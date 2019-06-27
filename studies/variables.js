/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john
//NOTE: Everything to the right of the assignment operator (=) is resolved before the value is assigned to the variable to the left of the operator //

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let and const //
/* var, let and const are all bindings, but they vary in certain ways:*/
var myVar = 'word' // Reassignable; Hoisted; Scoped to functions but not if or loop blocks;
let myVar2 = 'word2' // Reassignable like a var; Not hoisted; Scoped to functions, if blocks AND loop blocks;
const myVar3 = 'word3' // NOT reassignable; Not hoisted; Scoped to functions, if blocks and loop blocks

// 5. Hoisting //
/*Hoisting generally refers to moving a declaration of a var or function to the top of the code;
 * Before the statements of a program are executed, all var and funtion declarations (NOT INITIALIZATIONS!) are "hoisted" to the top of the program.
    * Because of this, if a var value is referenced before it is declared, it will return a value of undefined rather than a ReferenceError
    * let and const are not hoisted, so it will throw a reference error if they are reference before they are declared.*/

