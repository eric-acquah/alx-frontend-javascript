// Create a blueprint for student objects
interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student;
let student2: Student;

// Create students
student1 = {
    firstName: "kojo",
    lastName: "Grove",
    age: 30,
    location: "Ghana"
}

student2 = {
    firstName: "Abena",
    lastName: "Grove",
    age: 27,
    location: "Ghana"
}

// Save student objects in array
const studentsList: Student[] = [student1, student2];

// Render a table with student name and locations
const table = document.body.appendChild(document.createElement("table"));

for (let key of studentsList) {
    const row = table.appendChild(document.createElement("tr"));
    const tdata1 = row.appendChild(document.createElement("td"));
    const tdata2 = row.appendChild(document.createElement("td"));
    tdata1.innerHTML = key.firstName;
    tdata2.innerHTML = key.location;
}