/* Start
# A function that returns the sum of two numbers
GET two numbers from a user
SET result =  the first number added to the second number
PRINT result
END */

/* Start
# A function that takes an array of strings, and returns a string that is all those strings concatenated
# Given an array of strings called arrayOfStrings
SET an iterator to 1
SET an empty string called newString
WHILE iterator is less than arrayOfStrings length
  SET newElement = to value of arrayOfStrings at space "iterator"
  SET value of newString = to newString + newElement
PRINT newString
END */

/*
# A function that takes an array of integers, and returns a new array with every other element
# given an array of integers called arrayOfInt
SET iterator = 1
SET an empty array called newArray
WHILE iterator is less than arrayOfInt
  SET secIterator = 1
  SET newElement = value within newArray at space "iterator"
  SET newArray value at space "secIterator" to same value as at arrayOfInt at space "iterator"
  Iterator = Iterator + 2 
  secIterator = secIterator + 1
PRINT newArray
END */

//Need to rework last one because iteraor number for newArray and arrayOfInt are different.