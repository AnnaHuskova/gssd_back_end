function createError(status:number, message:string) {
  const err = new Error();
  // err.status = status;
  err.message = message;
  return err;
};

export {
  createError,
};

// Функция для создания ошибки, пример использования: createError(404, "Not found");
// Первый аргумент - код ошибки, второй - текст
