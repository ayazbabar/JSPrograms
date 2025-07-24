const word = "hello world";
const count = 1;

const printHelloWorld = (count, word) => {
  const timeout = setTimeout(() => {
    const makeword = word.slice(0, count);
    

    if (count < word.length) {
      printHelloWorld(count + 1, word);
    } else {
      clearTimeout(timeout);
    }
    console.log(makeword);
  }, 50);
};

printHelloWorld(count, word);
