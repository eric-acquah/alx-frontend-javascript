/* Creates and returns 3 instances of the imported class */

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroomObjs = [];
  let i;

  for (i of [19, 20, 34]) {
    classroomObjs.push(new ClassRoom(i));
  }

  return classroomObjs;
}
