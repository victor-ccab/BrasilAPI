import app from '../../../../app';

import BaseError from '../../../../errors/base';
import InternalServerError from '../../../../errors/internal-server';
import NotFoundError from '../../../../errors/not-found';

import { getDddsData } from '../../../../services/ddd';

async function citiesOfDdd(request, response, next) {
  try {
    const requestedDdd = request.query.ddd;

    const allDddData = await getDddsData();

    const dddData = allDddData.filter(({ ddd }) => ddd === requestedDdd);

    if (dddData.length === 0) {
      response.status(404);
      throw new NotFoundError(
        'ddd_error',
        'DDD não encontrado',
        'DDD_NOT_FOUND'
      );
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
    if (error instanceof BaseError) {
      return next(error);
    }

    throw new InternalServerError(
      'ServiceError',
      'Todos os serviços de DDD retornaram erro.',
      'service_error'
    );
  }
}

export default app().get(citiesOfDdd);
