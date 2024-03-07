/* Handel a resolved promise */

export default function handleResponseFromAPI(promise) {
  const successObj = {
    status: 200,
    body: 'success',
  };

  return promise
    .then(() => successObj) // Return object if successful
    .finally(console.log('Got a response from the API')) // log message after each fulfillment
    .catch(() => Error()); // Return empty error object upon reject
}
