import { uploadPhoto, createUser } from './utils';

/* Resolves returned promises */

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((utils) => {
      console.log(utils[0].body, utils[1].firstName, utils[1].lastName);
      return utils;
    })
    .catch(() => console.log('Signup system offline'));
}
