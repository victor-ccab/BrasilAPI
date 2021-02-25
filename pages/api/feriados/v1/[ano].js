import app from '../../../../app';
import getHolidays from '../../../../services/holidays';

const action = (request, response) => {
  try {
    const holidays = getHolidays(request.query.ano);

    response.status(200).json(holidays);
  } catch (error) {
    if (error.message === 'Cannot calculate holidays.') {
      response.status(404).json({
        type: 'feriados_range_error',
        message: 'Ano fora do intervalo suportado entre 1900 e 2199.',
      });
    } else {
      response.status(500).json({
        type: 'feriados_error',
        message: 'Erro ao calcular feriados.',
      });
    }
  }
};

export default app().get(action);
