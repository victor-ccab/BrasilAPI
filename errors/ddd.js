function DddError(status, message, type) {
  this.name = 'ddd_error';
  this.status = status;
  this.message = message;
  this.type = type;
}

DddError.prototype = new Error();

export default DddError;
