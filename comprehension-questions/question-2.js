/*

Comprehension Question #2

* For these problems feel free to use some sort of paint software or good ol pen and paper to draw out the flow of the code.

Draw out the execution of this code. Explain how the event loop processes each of the function calls. What order will the code run and why? Explain when and why items enter and leave the call stack and message queue.
*/

setTimeout(() => {
  console.log('first');
}, 5000);

setTimeout(() => {
  console.log('second');
}, 0);

console.log('third')
