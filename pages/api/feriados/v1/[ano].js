import app from '../../../../app';
import BaseError from '../../../../errors/base';
import InternalServerError from '../../../../errors/internal-server';
import getHolidays from '../../../../services/holidays';

const action = (request, response) => {
  try {
    const holidays = getHolidays(request.query.ano);

    response.status(200).json(holidays);
  } catch (error) {
    if (error instanceof BaseError) {
      throw error;
    }

    throw new InternalServerError(
      'InternalServerError',
      'Erro ao calcular feriados.',
      'feriados_error'
    );
  }
};

export default app().get(action);
