import app from '../../../../app';
import { getDddsData } from '../../../../services/ddd';
import DddError from '../../../../errors/ddd';

async function citiesOfDdd(request, response, next) {
  try {
    const requestedDdd = request.query.ddd;

    const allDddData = await getDddsData();

    const dddData = allDddData.filter(({ ddd }) => ddd === requestedDdd);

    if (dddData.length === 0) {
      response.status(404);
      throw new DddError(404, 'DDD não encontrado', 'DDD_NOT_FOUND');
    }

    const { state } = dddData[0];

    const cities = dddData.map((ddd) => ddd.city);

    const dddResult = {
      state,
      cities,
    };

    response.status(200);
    return response.json(dddResult);
  } catch (error) {
    if (error instanceof DddError) {
      return next(error);
    }

    throw new DddError(
      500,
      'Todos os serviços de DDD retornaram erro.',
      'service_error'
    );
  }
}

export default app().get(citiesOfDdd);
