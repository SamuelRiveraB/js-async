// Callback queue - Task queue
setTimeout(() => console.log("1", "is the loneliest number"), 0);
setTimeout(() => console.log("2", "can be as bad as one"), 10);

// 2 Job queue - Microtask queue higer priority than Callback queue
Promise.resolve("Hi").then((data) => console.log("3", data));

// 3
console.log("4", "is a crowd");

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `Parallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `Race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `Sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 6000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 6000));

Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
