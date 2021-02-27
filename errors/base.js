function BaseError(
  name = 'BaseError',
  message,
  type = 'base_error',
  errors = []
) {
  this.statusCode = 500;
  this.name = name;
  this.message = message;
  this.type = type;
  this.errors = errors;
}

BaseError.prototype = new Error();

export default BaseError;
