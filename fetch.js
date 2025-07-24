const data = {
    title : "learning fetch POST",
    completed: false,
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/todos',{
    method: "POST",
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
    
)
.then(response=> response.json())
.then(data=>console.log(data))
.catch(err=>console.error(err))