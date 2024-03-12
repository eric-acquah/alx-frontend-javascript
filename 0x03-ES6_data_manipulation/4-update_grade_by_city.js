/* Updates grade value of student object */

import getStudentsByLocation from './2-get_students_by_loc';
import getListStudentIds from './1-get_list_student_ids';

export default function updateStudentGradeByCity(objArray, city, newGrades) {
  let result = [];
  let byCity;

  if (objArray instanceof Array) {
    // Extract student objs that matches the specified city
    byCity = getStudentsByLocation(objArray, city);
    const availableIds = getListStudentIds(byCity); // Extract the ids only into an array

    if (newGrades instanceof Array) {
      // filter out newGrade objs that matches at least 1 of the student id
      const selectGrades = newGrades.filter((value) => availableIds.includes(value.studentId));

      // Attach matching grades to the respective student obj
      result = byCity.map((value) => {
        const cloneVal = value; // creates a copy of the current student obj value

        cloneVal.grade = 'N/A'; // Adds new 'grade' property to the obj and initialize it with 'N/A'
        let val;

        for (val of selectGrades) { // Loop through filtered newGrade obj array
          if (val.studentId === cloneVal.id) { // If a matching id is found
            cloneVal.grade = val.grade; // attach corresponding grade
            break;
          }
        }
        // Returns the cloned obj with 'grade' property set to either the matching grade or 'N/A'
        return cloneVal;
      });
    }
  }
  return result; // Returns an array of updated student objs or [] if objArray === []
}
