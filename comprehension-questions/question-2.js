/*

Comprehension Question #2

* For these problems feel free to use some sort of paint software or good ol pen and paper to draw out the flow of the code.

Draw out the execution of this code. Explain how the event loop processes each of the function calls. What order will the code run and why? Explain when and why items enter and leave the call stack and message queue.
*/


function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

setTimeout(foo, 1500);
setTimeout(bar, 1000);
console.log(somethingSlow(44));
