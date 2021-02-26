import BaseError from './base';

function NotFoundError(
  name = 'NotFoundError',
  message,
  type = 'not_found_error'
) {
  this.status = 404;
  this.name = name;
  this.message = message;
  this.type = type;
}

NotFoundError.prototype = new BaseError();

export default NotFoundError;
