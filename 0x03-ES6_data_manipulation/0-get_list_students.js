/* Function to return a list of objects */

export default function getListStudents() {
  const student = function (id, firstName, location) {
    return {
      id,
      firstName,
      location,
    };
  };

  const allStudents = [];

  const s1 = student(1, 'Guillaume', 'San Francisco');
  const s2 = student(2, 'James', 'Columbia');
  const s3 = student(5, 'Serena', 'San Francisco');

  allStudents.push(s1, s2, s3);

  return allStudents;
}
