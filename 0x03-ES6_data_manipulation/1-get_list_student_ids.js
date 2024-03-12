/* Returns an array of ids obtained from an array argument of student objects */

export default function getListStudentIds(objArray) {
  let result = [];

  if (objArray instanceof Array) {
    result = objArray.map((value) => value.id);

    return result;
  }

  return result;
}
