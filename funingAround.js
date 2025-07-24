const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 40 },
  { name: "Eva", grade: 77 },
];


// ✅ 1️⃣ Get an array of names of passed students (grade >= 60) using filter and map.
// ✅ 2️⃣ Calculate the average grade of all students using reduce.
// ✅ 3️⃣ Create a function addStudent that adds a new student using the spread operator without mutating the original array.
// ✅ 4️⃣ Create a function that returns an array of students with grades boosted by 5 using map and spread.

const namesOfPassedStudents = students.filter(student=>student.grade>=60)
.map(passed=>passed.name)

console.log(namesOfPassedStudents)

const avg = students.reduce((acc,cur)=>acc+cur.grade,0)/students.length;

console.log(avg)

 addStd = (students,newStd)=>(
[...students,newStd]
 )


console.log(addStd(students, {name:"ayaz",grade:88}))
