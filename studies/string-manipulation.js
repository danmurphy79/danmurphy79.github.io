/*
 * STRING MANIPULATION
 * Strings can be manipulated two different ways: with the concatenate operator (+)
 * and with a number of useful string methods.
 * 1. With the concatenate operator: */
    'The ' + 'Dude ' + 'abides.' // resolves to one string: 'The Dude abides.'
// 2. With string methods:
    let myVar = 'DaN muRPhy'
    myVar.toUpperCase(); // Results in 'DAN MURPHY'
    myVar.toLowerCase(); // Results in 'dan murphy'
    myVar.split(' '); // Splits the string on ever occurence of ' '; Results in an array: [ 'DaN', 'muRPhy' ]
    myVar.trim(); // Trims the whitespace; results in 'DaNmuRPhy'
    myVar.replace('DaN', 'Dan') // Searches for the first argument, replaces it with the second.