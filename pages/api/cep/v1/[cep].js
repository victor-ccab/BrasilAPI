import cep from 'cep-promise';
import app from '../../../../app';

const providers = ['correios', 'viacep', 'widenet'];

async function Cep(request, response) {
  const requestedCep = request.query.cep;

  const cepResult = await cep(requestedCep, {
    providers,
  });

  response.status(200);
  return response.json(cepResult);
}

export default app({ cache: 172800 }).get(Cep);
