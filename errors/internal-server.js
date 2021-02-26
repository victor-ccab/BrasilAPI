import BaseError from './base';

function InternalServerError(
  name = 'InternalServerError',
  message,
  type = 'internal_server_error',
  errors = []
) {
  this.status = 500;
  this.name = name;
  this.message = message;
  this.type = type;
  this.errors = errors;
}

InternalServerError.prototype = new BaseError();

export default InternalServerError;
