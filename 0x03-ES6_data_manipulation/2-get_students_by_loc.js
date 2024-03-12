/* Return an array obtained from filtering an array object by a given location */

export default function getStudentsByLocation(objArray, city) {
  let result = [];

  if (objArray instanceof Array) {
    result = objArray.filter((value) => value.location === city);

    return result;
  }

  return result;
}
