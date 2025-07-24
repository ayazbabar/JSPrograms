const doubleNumber = (n) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof n == "number"){
            resolve(n*2)
        }
        else{
            reject("not a number")
        }
    },500)
})
}
doubleNumber(`a`).then(doubleNumber)
.then(doubleNumber)
.then(result=>console.log(`Result:`,result))
.catch(err=>console.error(err))
.finally(()=>console.log("chain Complete"))