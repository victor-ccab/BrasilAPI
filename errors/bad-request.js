import BaseError from './base';

function BadRequestError(
  name = 'BadRequestError',
  message,
  type = 'bad_request_error',
  errors = []
) {
  this.status = 400;
  this.name = name;
  this.message = message;
  this.type = type;
  this.errors = errors;
}

BadRequestError.prototype = new BaseError();

export default BadRequestError;
