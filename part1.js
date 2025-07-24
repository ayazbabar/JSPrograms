const car = { brand: "Toyota", year: 2020, color: "blue" };

const carkeys = Object.keys(car);
console.log(carkeys)

const carvalues = Object.values(car);
console.log(carvalues)

Object.entries(car).forEach(([values,keys])=>{
  console.log(`${values}: ${keys}`)
})

const fulldetails = Object.entries(car).map(([key, value]) => (`${key}: ${value}`));

console.log(fulldetails);

const fullarr = fulldetails.join("\n");

console.log(fullarr)