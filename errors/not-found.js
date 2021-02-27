import BaseError from './base';

function NotFoundError(
  name = 'NotFoundError',
  message,
  type = 'not_found_error',
  errors = []
) {
  this.statusCode = 404;
  this.name = name;
  this.message = message;
  this.type = type;
  this.errors = errors;
}

NotFoundError.prototype = new BaseError();

export default NotFoundError;
