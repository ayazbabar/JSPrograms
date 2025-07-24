
const task1 = () => {
    return new Promise((resolve)=>
    setTimeout(()=>{console.log("task1 completed"); resolve(1)},500))
}
const task2 = (data) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task2 completed");
      resolve(data + 1);
    }, 500)
  );
};
const task3 = (data) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task3 completed");
      resolve(data + 1);
    }, 500)
  );
};

task1()
  .then()
  .then((data) => task2(data))
  .then((data2) => task3(data2))
  .then((data3) => console.log(data3))
  .catch((err) => console.error(err));
