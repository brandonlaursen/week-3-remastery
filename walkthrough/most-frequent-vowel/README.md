
# WhiteBoarding Problem - mostFrequentVowel 

We will be using Polya's method to solve mostFrequentVowel!


# Polya’s Method For Solving Problems

There are four steps that you can use to help solve any
problem, especially ones you have never seen before.

* Step 1: Understanding the problem - Write the problem in
your own words showing that you truly understand what it is
actually asking you to do.

* Step 2: Make a Plan - In this step, you will develop a plan
using pseudocode to solve the problem.

* Step 3: Carry out the Plan - Write the code!

* Step 4: Look back and Improve Your Solution - Refactor!

# WhiteBoarding Problem - mostFrequentVowel

## The Prompt

Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

The goal is to create a function that takes in an array of words and returns the vowel that shows up the most.


# mostFrequentVowel - Understanding the Problem

## Understand the problem

First off, we must understand the problem. We can do this by writing in our own words, what the problem is asking of us. As we do this, we can take note of the data types we are working with as well as what is expected as an input and output.


## Explanation of the problem

We need to create a function mostFrequentVowel() that takes in a array of words and an counter object as a default parameter. This function will return the vowel that shows up the most across the words. This function must be recursive.


# mostFrequentVowel - Make A Plan

The next step of polya's method is to make a plan. We are going to do this through pseduocode. By writing out our plan in plain english we can better visualize what we are trying to achieve. Remember you can always go back and change your plan.


1. Create a function mostFrequentVowel(words) that takes in an array of words.
2. Because were working with a recursive function, we will need a base case and a recursive step.
  * a. base case - when the length of the words array is 0;
  We will shorten the words array as we recurse, so we can check every word in the array.
  * b. recursive step - words.slice(1) slice off the first word of the words array, this will takes us towards our base case of a array length of 0.
3. As we recurse, we want to check the first word in the words array and find all the vowels. We can do this by iterating.
  * a. iterate using a for loop up the length of the first word off the words array
    As we iterate:
    1. create a variable to hold the letter.
    2. check if the letter is a vowel.
      * if it is
        * check if letter exists in counter default param object
          * if it doesn't
            - create it - letter as key and value as number of occurrences
          * if it does
            - add one to the key
        * if its not
            * do nothing
4. In order to reach our base case, we will use our recursive step words.slice(1) and make a recursive call to mostFrequentVowel passing the modified arr and the counter objects
5. Once we hit our base case
  1. define a variable to track highest occurring vowel
  2. define a variable to track current most vowel
  3. iterate through counter objects
   * as we iterate
    a. check if the value at the key in the counter object is bigger or smaller than the current highest
   *  if it is
        * a. highest becomes the value at the key
        * b. current most becomes the key
   * if it isn't
      * a. do nothing
  4. Return the currentMost

# mostFrequentVowel - Carry out the plan

## 1. Create the function

Step 1: Create a function mostFrequentVowel(words) that takes in an array of words

The first thing were going to do is setup our function as well as our test cases. Here we can decide whether to use function declaration vs function expression and fat arrow vs no fat arrow. Lets go with a function expression without the fat arrow.

```
let mostFrequentVowel = function (words, counter = {}) {
  // Write code here.
};

//Remember we can have multiple test cases, you can always comment some out for clarity. If you do not wrap a function invocation in a console.log, you will not see it print out its return value.
mostFrequentVowel(["dog", "cow", "pig", "chicken", "horse"]); // 'o'
mostFrequentVowel(["dog", "cow", "pig", "chicken"]); // 'i' or 'o'
```


## 2. Create base case and recursive Step

Because were going to be working with a recursive function, one of the first things well want to do is identify our base case and recursive step.
Our base case, is how we will tell our function to stop recursing. If we never tell it to stop, well get a stack overflow error!
A recursive step is also necessary as we need someway to work towards our base case, also being our terminating case.

Because were working with an array, weve identfied in our plan that we want to stop recursing when our array length hits 0, we will reach this by slicing off the first element in the array.

Lets take a look!

```
let mostFrequentVowel = function (words, counter = {}) {

  // base case
  //this tells our function to stop recursing
  if(words.length === 0) {
    return;
  }

  //recursive step
  //we are slicing off the first element of the words array
  //and passing the new array without the first element into our next call to mostFrequentVowel
  return mostFrequentVowel(words.slice(1), counter)
};
```

## 3. Check the first word for vowels

mostFrequentVowel - Check the first word for vowels

So now that we have our base case and recursive step out of the way. We need to think about what we need to do before recursive function calls. Because we are trying to count all the vowels and find the vowel that appears the most in the words array being passed in. We can iterate through just the first word of the words array and populate our counter object. Because each time we recurse we remove the first word from the word array. Well be able to check each word by one by one for all its vowels.

Lets give it a shot!


```
let mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    return;
  }

  //Lets implements some logic to count the vowels of the first word in the words array

  /*
We can use a plan we've already devised using polya's
a. iterate using a for loop up the length of the first word off the words array
    As we iterate:
    1. create a variable to hold the letter
    2. check if the letter is a vowel
      if it is
        check if letter exists in counter default param object
          if it doesn't
            - create it - letter as key and value as number of occurrences
          if it does
            - add one to the key
      if its not
        b. do nothing
  */

  return mostFrequentVowel(words.slice(1), counter);
};
```

## 3. Check the first word for vowels continued

We know we need to iterate to count the vowels present in a word, thankfully we've already written a plan we can follow to populate our default parameter counter object.


```
let mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    return;
  }

  //Lets implements some logic to count the vowels of the first word in the words array

  for (let i = 0; i < words[0].length; i++) {
    // 1. create a variable to hold the letter
    let letter = words[0][i];

    //2. check if the letter is a vowel
    if (VOWELS.includes(letter)) {
      //check if letter exists in the counter default param object
      if (counter[letter] === undefined) {
        //create it - letter as key and value as number of occurrences
        counter[letter] = 1;
      } else {
        //add one to the key if letter already exists in counter object
        counter[letter] += 1;
      }
    }
  }

  return mostFrequentVowel(words.slice(1), counter);
};
```

## 4. Check our counter object

As we recurse we first checking if there is length in our words array or not. If there is, we continue with the body of our function and populate a counter object by iterating through the first word of the words array. As we iterate through the word, we check for vowels than track how many times they occur using the letter as the key and the number of occurences as the value. Each time we recurse we slice off the first word from the words array and then pass the shorten array to the next function call to mostFrequentVowel. Each time we do this we iterating through the new first word and populating our counter object. After we hit the base case we can then use this counter object to find the most frequent vowel

Lets implement the logic for when we hit our base case
Luckily we have written this our in our polyas

```

let mostFrequentVowel = function (words, counter = {}) {
  //once we hit our base case, what do we want to do?
  //we want to find the most frequent vowel in our counter object

  // 5. Once we hit our base case
  // 1. define a variable to track highest occurring vowel
  // 2. define a variable to track current most vowel
  // 3. iterate through counter objects
  //   as we iterate
  //   a. check if the value at the key in the counter object is bigger or smaller than the current highest
  //   if it is
  //     a. highest becomes the value at the key
  //     b. current most becomes the key
  //   if it isn't
  //     a. do nothing
  // 4. Return the currentMost
  // if (words.length === 0) {
  //   let highest = -Infinity;
  //   let currentMost = "";

  //   for (let key in counter) {
  //     if (counter[key] > highest) {
  //       highest = counter[key];
  //       currentMost = key;
  //     }
  //   }
  //   return currentMost;
  // }


  for (let i = 0; i < words[0].length; i++) {
    let letter = words[0][i];
    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }

  return mostFrequentVowel(words.slice(1), counter);
};
```
## 4. Check our counter object continued

```

let mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    // 1. define a variable to track highest occurring vowel
    let highest = -Infinity;
    // 2. define a variable to track current most vowel
    let currentMost = "";

    // 3. iterate through counter object
    for (let key in counter) {
      // a. check if the value at the key in the counter object is bigger or smaller than the current highest
      if (counter[key] > highest) {
        // highest becomes the value at the key
        highest = counter[key];
        // current most becomes the ke
        currentMost = key;
      }
    }
    // Return the currentMost
    return currentMost;
  }

  for (let i = 0; i < words[0].length; i++) {
    let letter = words[0][i];
    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }

  return mostFrequentVowel(words.slice(1), counter);
};
```

# Refactor - mostFrequentVowel

Every solution can be refactored, can this one?
There are a few ways we can tidy up this solution.
1. Create some helper functions
2. Use fat arrows
3. Tidy up the if statements

Lets clean things up!

```


let mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    let highest = -Infinity;

    let currentMost = "";

    for (let key in counter) {
      if (counter[key] > highest) {
        highest = counter[key];
        currentMost = key;
      }
    }
    return currentMost;
  }

  for (let i = 0; i < words[0].length; i++) {
    let letter = words[0][i];
    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }

  return mostFrequentVowel(words.slice(1), counter);
};
```
## mostFrequentVowel - Create helper Functions! - Refactor
Looking at our solution we notice there is a ton of logic that we can group up into there own responsibilities. We want to break down our code into sub problems and our function to do one thing and one thing well.

Looking at our solution looks we can move the logic within the base case into its own function as well as the logic to populate the counter object.

Lets start with populating the counter object

```
let populateCounterObject = function (words, counter){
  for (let i = 0; i < words.length; i++) {
    let letter = words[i];

    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }
  return counter;
};
let mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    let highest = -Infinity;

    let currentMost = "";

    for (let key in counter) {
      if (counter[key] > highest) {
        highest = counter[key];
        currentMost = key;
      }
    }
    return currentMost;
  }

  // Instead of having the logic here, we instead pass the first word of the words array to our helper function where we then store its return value, being a counter object, in a variable
  //we then pass the variable to the next call to mostFrequentVowel
  let newCounterObj = populateCounterObject(words[0], counter);

  //notice we are passing the newCounter object returned from the helper function
  return mostFrequentVowel(words.slice(1), newCounterObj);
};
```


## mostFrequentVowel - Create helper Functions! - Refactor continued
Now that we've got one helper function out of the way, lets create our second when which handle the logic of the base case.

```
let populateCounterObject = function(words, counter){
  for (let i = 0; i < words.length; i++) {
    let letter = words[i];

    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }
  return counter;
};

let findCurrentMostVowel = function (counter){
  let highest = -Infinity;
  let currentMost = "";

  for (let key in counter) {
    if (counter[key] > highest) {
      highest = counter[key];
      currentMost = key;
    }
  }

  return currentMost;
};

let mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    //Create a variable to hold the return value of passing the counter object to the helper function.
    //the return value being the most frequent vowel
    let mostFrequentVowelResult = findCurrentMostVowel(counter);
    return mostFrequentVowelResult;
  }

  let newCounterObj = populateCounterObject(words[0], counter);

  return mostFrequentVowel(words.slice(1), newCounterObj);
};
```
## mostFrequentVowel - Fat arrows! - Refactor

```

let populateCounterObject = (words, counter) => {
  for (let i = 0; i < words.length; i++) {
    let letter = words[i];

    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) {
        counter[letter] = 1;
      } else {
        counter[letter] += 1;
      }
    }
  }
  return counter;
};

let findCurrentMostVowel = (counter) => {
  let highest = -Infinity;
  let currentMost = "";

  for (let key in counter) {
    if (counter[key] > highest) {
      highest = counter[key];
      currentMost = key;
    }
  }

  return currentMost;
};

let mostFrequentVowel = (words, counter = {}) =>  {
  if (words.length === 0) {
    let mostFrequentVowelResult = findCurrentMostVowel(counter);
    return mostFrequentVowelResult;
  }

  let newCounterObj = populateCounterObject(words[0], counter);

  return mostFrequentVowel(words.slice(1), newCounterObj);
};

```

## mostFrequentVowel - Clean up if statements and loops! -Refactor

```


let populateCounterObject = (words, counter) => {
  words.forEach((letter) => {
    if (VOWELS.includes(letter)) {
      if (counter[letter] === undefined) counter[letter] = 1;
      else counter[letter] += 1;
    }
  });

  return counter;
};

let findCurrentMostVowel = (counter) => {

  let highest = -Infinity;
  let currentMost = "";

  for (let key in counter) {
    if (counter[key] > highest) {
      highest = counter[key];
      currentMost = key;
    }
  }

  return currentMost;
};

let mostFrequentVowel = (words, counter = {}) => {
  if (words.length === 0) {
    let mostFrequentVowelResult = findCurrentMostVowel(counter);
    return mostFrequentVowelResult;
  }

  let newCounterObj = populateCounterObject(words[0], counter);

  return mostFrequentVowel(words.slice(1), newCounterObj);
};
```
