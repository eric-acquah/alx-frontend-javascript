/* Creates a Teacher interface */

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors  extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction = function(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

// Interface for StudentClass
interface studentClassTemp {
    workOnHomework(): string;
    displayName(): string;
}

interface constructorTemp {
    new(firstName: string, lastName: string): StudentClass;
}

function createNewStudent(struct: constructorTemp, fname: string, lname: string): studentClassTemp {
    return new struct(fname, lname);
}


// Class definition
class StudentClass implements studentClassTemp {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// const student11 = createNewStudent(StudentClass, 'Joe', 'Kind');

// console.log(student11.displayName())
// console.log(student11.workOnHomework())
