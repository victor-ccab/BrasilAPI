import nc from 'next-connect';

import cors from 'cors';
import onError from './middlewares/errorHandler';
import cache from './middlewares/cache';
import logger from './middlewares/logger';

const corsDefaultConfiguration = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const cacheDefaultConfiguration = 86400;

export default (options = {}) => {
  const corsOptions = options.cors || {};
  const cacheOptions = options.cache || cacheDefaultConfiguration;

  const configurations = {
    cors: {
      ...corsDefaultConfiguration,
      ...corsOptions,
    },
    cache: cacheOptions,
  };

  return nc({
    onError,
  })
    .use(cors(configurations.cors))
    .use(logger)
    .use(cache(configurations.cache));
};
