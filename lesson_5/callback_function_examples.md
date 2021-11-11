Example 3

Action method call (map)

performed on the outer array

Side Effect: None

Return value: New array [1, 3]

Is return value used: no


Action callback excecution

performed on each subarray

side effect: none

return value the element at [0] of each subarray

Is return value used: Yes Map uses it to fill a returned array


Action Method call (console.log)

performed on element at [0] of the subarray

side effect: prints to the console

return value: undefined

Is return value used: no


Action Element reference at [0]

Performed on each sub array 

side effect: none

return value: yes, the element at [0]

is return value used: yes by console.log


Action Element reference at [0]

Performed on each subarray

side effect: no

return value: yes the element at [0] of each subarray

is return value used: Yes, explicitly used by the callback


Example 4

Action variable declaration

performed on N/A

side effect: no

return value: yes  undefined (variable declarations are always undefined)

is return value used: no


Action method call forEach

performed on outer array

side effect: of itself no

return value: yes undefined

return value used: in variable declaration


Action outer callback execution
Performed on each subarray in array
side effect: no
return value [undefined, undefined]
return value used no

Action method call map used as callback function

performed on each subarray

side effect: not of itself

return value: yes [undefined, undefined]

return value used: Yes returned by the outer callback function


Action inner callback execution

performed on each element in a subarray

side effect: no

return value: yes undefined

return value used: yes by map

Action Comparison (>)
Performed on each element in subarray
side effect: no
return value: yes, true or false
return value used: yes by if statement


Action method call console.log

performed on element of the subarray in that iteration

side effect: outputs string of number

return value: yes undefined

return value used: yes by inner callback function

## Example 5 ##

Action outer method call map
performed on outer array
side effect: no
return value: yes [[2, 4], [6, 8]]
return value used: It's returned but not used for anything

Action outer callback function
performed on each subarray
side effect: no
return value: yes [[2, 4], [6, 8]]
return value used: yes by outer map

Action inner method call map
performed on each element in each sub array
side effect: no
return value: yes [2, 4] [6, 8]
return value used: yes by outer callback function

Action inner callback function
performed on each element in a subarray 
side effect: no
return value: yes a number
return value used: yes by inner map

Action num * 2
Performed on value of num parameter
side effect: no
return value: yes a number
return value used: yes by inner callback function

## Example 6 ##

Action filter method
performed on array of objects
side effect: no
return value: yes selected elements in an array
return value used: no

Action outer callback function
performed on each element in the array during an iteration
side effect: no
return value: yes boolean
return value used: yes by filter method

Action Object.keys method
performed on the object parameter of the callback function
side effect: no
return value: yes an array of keys
return value used: yes by every method

Action every method 
performed on array passed by keys method
side effect no
return value: Boolean
return value used: yes by filter

Action inner callback function
performed on each element passed by the keys array
side effect: no
return value: yes boolean
return value used by every method

Action object value reference
Performed on the object parameter passed to it
side effect no
return value yes the value referenced
return value used by string index reference

Action String index reference
performed on each value passed to it by the value reference
side effect: no
return value yes the character referenced by the index in the string passed to it
return value used yes by strict equality operator

Action strict equality operator
performed on referenced character and key parameter passed to it
side effect no
return value yes boolean
return used by inner callback function

## Example 9 ##

Action outer map method call
performed on outer array
return value tbd transformed array

Action outer callback function
performed on each element passed to it
return value tbd transformed array
return value used by outer map method

Action inner map method
performed on each element of the subarray passed to it
return value yes tbd transformed array

