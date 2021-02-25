import DddError from '../errors/ddd';

const getCepErrorStatusCode = (error) => {
  const errorTypeToStatus = {
    validation_error: 400,
    service_error: 404,
  };

  return errorTypeToStatus[error.type];
};

export default function errorHandler(error, request, response) {
  if (error.name === 'CepPromiseError') {
    response.status(getCepErrorStatusCode(error));

    return response.json(error);
  }

  if (error instanceof DddError) {
    return response.status(error.status).json({
      message: error.message,
      type: error.type,
      name: error.name,
    });
  }

  return response.status(500).json(error);
}
