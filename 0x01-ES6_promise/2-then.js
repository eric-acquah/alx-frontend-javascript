/* Handel a resolved promise */

export default function handleResponseFromAPI(promise) {
  const successObj = {
    status: 200,
    body: 'success',
  };

  promise
    .then(console.log('Got a response from the API'))
    .then(() => successObj)
    .catch(Error());
}
