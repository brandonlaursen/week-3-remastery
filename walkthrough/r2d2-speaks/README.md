# WhiteBoarding Problem - r2d2Speaks

We will be using Polya's method to solve r2s2Speaks

Write a function r2d2Speaks that takes in a series of 0s and 1s.
The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

```
let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
```

# Polya’s Method For Solving Problems

There are four steps that you can use to help solve any
problem, especially ones you have never seen before.

- Step 1: Understanding the problem - Write the problem in
  your own words showing that you truly understand what it is
  actually asking you to do.

- Step 2: Make a Plan - In this step, you will develop a plan
  using pseudocode to solve the problem.

- Step 3: Carry out the Plan - Write the code!

- Step 4: Look back and Improve Your Solution - Refactor!

# WhiteBoarding Problem r2d2Speaks

## The Prompt

Write a function r2d2Speaks that takes in a series of 0s and 1s.
The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

# WhiteBoarding Problem r2d2Speaks - Understanding the Problem

## Understand the problem

We need to create a function called r2d2Speaks that takes in an array of numbers, and prints to the terminal either a boop or a beep depending on the current number code in the array after a certain delay.


# r2d2Speaks - Plan it out

Lets make a plan!

1. Create a function called r2d2Speaks(code) that takes in an array of numbers representing code
2. Create our base case
  * a. when the length of the code array is 0, we will stop recursing
3. Recursive step
  * a. we can reach our base case by shifting off the first element
4. As we shift off the first element, we can store it in a variable and use it to check what we should print to the console
5. Conditionally check what the firstElement shifted off is
  depending if its 0 or 1
  * a. If its 0, then we will console.log beep
    1. call settimeout passing the new code array and the   delay
  * c. If its 1, then we will console.log boop
    1.call settimeout passing the new code array and the delay



# 1. r2d2Speaks - Create the Function!
Create a function called r2d2Speaks(code) that takes in an array of numbers representing code

```
function r2d2Speaks(code) {
  // Write code here.
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);
```

# 2. r2d2Speaks - Base case


Create our base case
  a. when the length of the code array is 0, we will stop recursing

We need to tell our function when to stop recursing!

```
function r2d2Speaks(code) {
  // base case
  if (code.length === 0) {
    return
}
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);
```
# 3. r2d2Speaks - Recursive Step
Recursive step
  a. we can reach our base case by shifting off the first element

As we shift off the first element, we can store it in a variable and use it to check what we should print to the console

```
function r2d2Speaks(code) {

  if (code.length === 0) {
    return;
  }
  //recursive step, remove the first element of the array and store it in a variable
  let firstElement = code.shift();
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);
```

# 4. r2d2Speaks - Conditional Logic

Now its time to conditionally check what our shifted off element is.


5. Conditionally check what the firstElemented shifted off is
  depending if its 0 or 1
  a. If its 0, then we will console.log beep
    1. call settimeout passing the new code array and the   delay
  c. If its 1, then we will console.log boop
    1.call settimeout passing the new code array and the delay

```

function r2d2Speaks(code) {
  if (code.length === 0) {
    return;
  }

  let firstElement = code.shift();

  if (firstElement === 0) {
    // print beep and use a setTimeout of 400ms
    console.log("beep");
    setTimeout(function () {
      r2d2Speaks(code);
    }, 400);
  } else {
    // print boop and use a setTimeout of 800ms
    console.log("boop");
    setTimeout(function () {
      r2d2Speaks(code);
    }, 800);
  }
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);
```

# r2d2Speaks - Refactor!

Can we refactor this?

```
let r2d2Speaks = (code) => {
  if (!code.length) return;

  let firstElement = code.shift();

  if (firstElement === 0) {
    console.log("beep");
    setTimeout(r2d2Speaks, 400, code);
  } else {
    console.log("boop");
    setTimeout(r2d2Speaks, 800, code);
  }
};

let code = [0, 1, 1, 0];
r2d2Speak(code);
```

