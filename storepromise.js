const stock = () =>
 new Promise((resolve, reject) => {
    const ramdom = Math.random();
    setTimeout(() => {
      if (ramdom > 0.2) {
        console.log("Your Item is available")
        resolve("Scissors");
      } else {
        reject("Unfortunetly item is not availble");
      }
    }, 500);
  });

const payment = (item) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment is being processed for:",item);
      resolve(item)
    });
  });

const recipt = (item) =>
  new Promise((resolve, reject) => {
    resolve(`Name: ${item} Price: Rs.200`)
  });

stock()
  .then((item) => payment(item))
  .then((item) => recipt(item))
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("thanks for choosing our store"));
