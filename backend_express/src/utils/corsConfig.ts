import cors from 'cors';

export const corsOptions = {
  origin: ['http://localhost:4000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: [
    'Access-Control-Allow-Headers',
    'X-Requested-With',
    'X-Access-Token',
    'Content-Type',
    'Host',
    'Accept',
    'Connection',
    'Cache-Control',
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

export default cors(corsOptions);
