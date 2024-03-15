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
