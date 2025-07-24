word = "hello world";
let count = 0;
const timeout = setInterval(() => {
  let progress = word.slice(0, count);
  count++;
  console.log(progress);
  if (count > word.length) {
    clearInterval(timeout);
  }
}, 50);
