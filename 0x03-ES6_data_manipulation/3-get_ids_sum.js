/* Returns the sum of all id values of a given object array */

import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(objArray) {
  let result;

  if (objArray instanceof Array) {
    const idList = getListStudentIds(objArray); // Extract the id values from the objects

    result = idList.reduce((acumulator, currentValue) => acumulator + currentValue);

    return result;
  }

  return result;
}
