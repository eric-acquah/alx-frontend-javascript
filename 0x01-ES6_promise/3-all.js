import { uploadPhoto, createUser } from './utils';

/* Resolves returned promises */

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  return Promise.all([p1, p2])
    .then((utils) => {
      console.log(utils[0].body, utils[1].firstName, utils[1].lastName);
      return utils;
    })
    .catch(() => console.log('Signup system offline'));
}
