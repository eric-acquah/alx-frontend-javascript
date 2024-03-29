import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((allResolve) => {
      allResolve.map(({ status, value, reason }) => {
        if (status === 'fulfilled') {
          return {
            status,
            value,
          };
        }
        return {
          status,
          value: `Error: ${reason.message}`,
        };
      });
    });
}
