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

// export const corsOptions: any = {
//   function(req: Request, res: any) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000:*' || 'http://127.0.0.1:4000:*');
//     res.setHeader('Access-Control-Request-Method', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     if (req.method === 'OPTIONS' || req.method === 'GET') {
//       res.writeHead(200);
//       res.end();
//       return;
//     }
//   },
// };

export default cors(corsOptions);
