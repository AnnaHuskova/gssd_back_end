/**
 * Example function to generate errors like this: createError(404, "Not found")
 * @param status HTTP response status code
 * @param message Text message to attack to the code
 * @returns 
 */
class CustomError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function createError(status: number, message: string) {
  const err = new CustomError(status, message);
  return err;
};

export default createError;
