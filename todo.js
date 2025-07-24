const todo = [
    {title:"complete core js",done:false},
    {title:"learn for each",done:true},
    {title:"learn map",done:true},

]

// ✅ Features:

// 1️⃣ Add a Todo:
// { title, done: false, id (optional) }
// Practice immutably adding items.

// 2️⃣ Remove a Todo by Title:
// Practice filter.

// 3️⃣ Toggle a Todo:
// Practice map and conditional updating.

// 4️⃣ List Todos:
// Nicely display them using loops.

// 5️⃣ Count Completed/Pending Todos:
// Practice reduce to count totals.

// 6️⃣ Edit Todo Title:
// Find by title and update immutably.

// 7️⃣ Clear Completed Todos:
// Remove all todos where done: true.

// 8️⃣ Sort Todos Alphabetically:
// Practice .sort() with string comparison.

// const addTodo = (todo,task)=>{
//     const addTodo = [...todo,task];
//     return addTodo;
// }

// console.log(addTodo(todo,{title:"washing clothes",done:false}))

// console.log(todo)

// const removeTodo = (todo, removeTask) => {
//   const removeTodo = todo.filter(task=>task.title !== removeTask)
//   return removeTodo;
// };

// console.log(removeTodo(todo,"complete core js"))



// const toggleTodo = (todo,task)=>{
//     const toggletodo = todo.find(toggle=>toggle.title == task)
// toggletodo.done = !toggletodo.done;
// return toggletodo;
    
     
// }

// console.log(toggleTodo(todo, "complete core js"),"\n");

// const toggleAllTasks = (todo)=>{
//  todo.forEach(toggle => toggle.done = !toggle.done )
    
// }

// toggleAllTasks(todo);
// console.log(todo)

// const listTodo = (todo)=>{
    
//     todo.forEach(tasks =>{ 
//         const complete = tasks.done ? "✅" : "❌";
//         console.log(`${complete} ${tasks.title}`)})
// }
// listTodo(todo)

// const countCompPendingTodos = (todos) =>{
//     const todosObj = todos.reduce((acc,task)=>{
//         const key = task.done?"completed":"pending";
//         acc[key] = (acc[key]||0) +1;
//         return acc;
//     },{})

//     return todosObj
// }
// console.log(countCompPendingTodos(todo))

const updateTitle = (todo,title,changeTitle)=>{
   const updatedarray = todo.map(task=>(
        task.title == title?{...task,title:changeTitle}:task
    ))
    return updatedarray;
}

console.log(updateTitle(todo, "learn map","learn heap"));


// const updateTitle = (todo, title, changeTitle) => {
//   const updatedTitle = todo.map((task) => {
//     if (task.title == title) {
//       const somearray = { ...task, title: changeTitle };
//       return somearray;
//     }
//     return task;
//   });
//   return updatedTitle;
// };