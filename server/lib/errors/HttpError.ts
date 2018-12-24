class HttpError extends Error {
  constructor(
    public httpStatus: number,
    message?: string,
    public payload?: object,
  ) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype); // required to make instanceof operator works
  }
}

export default HttpError;
