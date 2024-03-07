/* Handel a resolved promise */

export default function handleResponseFromAPI(promise) {
  const successObj = {
    status: 200,
    body: 'success',
  };

  return promise
    .then(() => successObj)
    .finally(console.log('Got a response from the API'))
    .catch(Error());
}
