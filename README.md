# App Academy Week 3 Remastery

Welcome to the Week 3 Remastery Repo!

So you've been set back a cohort... worry not as it not a set back, but more so a setup for your future!

You now have the opportunity to go back, review, and master content to help make you a overall stronger software engineer!

In this repo we've gathered some great problems to tackle to better prepare you for the assessment as well as two comprehension questions to test your understanding of week 3's content. We've also prepared a waterboarding walk through of the r2d2Speaks and mostFrequentVowel problems located in the walk through folder.

Please take the time to work through this repo and complete all the problems as well as the comprehension questions.

When you're finished, zip up this repo and sent it in a private dm on slack to your instructor.

In order to view the md files, you can either view them on github, or right click on vs code, then click open preview to view.

![Recursion!](/images/recursion.jpeg)

## Week 3 Remastery Topics

- Recursion
- String interpolation
- SetTimeout
- SetInterval
- Asynchronous code vs Synchronous code
- Event loop
  - Call Stack
  - Message Queue

Key Questions:

- What is recursion?
  - Identify what is the base case and the recursive case
  - What is a recursive step?
  - Define a stack overflow.
- What is the purpose of the event loop?
  - What is the call stack?
  - What is the message queue?
- What is the difference between synchronous and asynchronous code?
- What is an IFFE and in what scenarios are they useful?

Comprehension Questions
* For these problems feel free to use some sort of paint software or good ol pen and paper to draw out the flow of the code.
* These can be found in the compression-questions folder located in this repo.

- 1. Using the sumArray problem; draw out the stack frames and each recursive call. Demonstrate full understanding of the Call stack and how recursive code is executed.


- 2. Draw out the execution of this code. Explain how the event loop processes each of the function calls. What order will the code run and why? Explain when and why items enter and leave the call stack and message queue.

```
setTimeout(() => {
  console.log('first');
}, 5000);

setTimeout(() => {
  console.log('second');
}, 0);

console.log('third')

```
