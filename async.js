// Callback queue - Task queue
setTimeout(() => console.log("1", "is the loneliest number"), 0);
setTimeout(() => console.log("2", "can be as bad as one"), 10);

// 2 Job queue - Microtask queue higer priority than Callback queue
Promise.resolve("Hi").then((data) => console.log("3", data));

// 3
console.log("4", "is a crowd");
