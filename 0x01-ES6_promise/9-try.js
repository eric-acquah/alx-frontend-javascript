/* Returns a log of function execution and also handles exceptions */

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(`${err.name}: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
