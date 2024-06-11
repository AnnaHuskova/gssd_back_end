/**
 * Example function to generate errors like this: createError(404, "Not found")
 * @param status HTTP response status code
 * @param message Text message to attack to the code
 * @returns 
 */
function createError(status: number, message: string) {
  const err = new Error();
  // err.status = status;
  err.message = message;
  return err;
};

export default createError;
