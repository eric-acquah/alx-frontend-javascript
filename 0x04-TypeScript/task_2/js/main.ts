import { createConfigItem } from "@babel/core";

// Interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Function for creating instances of the classes
function createEmployee(salary: string | number): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}

// const obj = createEmployee(200)
// console.log(obj.workFromHome());
// // Teacher
// console.log(createEmployee(1000));
// // Director
// console.log(createEmployee('$500'));
// // Director

function isDirector(employee: any): employee is Director {
    return (typeof employee === 'object' 
    && typeof employee.workDirectorTasks === 'function');
}

function executeWork(employee: any) {
    if (isDirector(employee)) {
        const shout = employee.workDirectorTasks()
        console.log(shout);
    } else {
        const shout = employee.workTeacherTasks();
        console.log(shout);
    }
}

// executeWork(createEmployee(200));
// executeWork(createEmployee('5000'));

type Subjects = "Math" | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History'
    }
}

// console.log(teachClass('History'));
// console.log(teachClass('Math'));