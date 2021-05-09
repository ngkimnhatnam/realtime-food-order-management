/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import loaders from './loaders/index';
import httpServer from 'http';

const port = process.env.PORT || 3001;

const startServer = async () => {
  const application = express();

  const app = await loaders({ expressApp: application });

  const server = httpServer.createServer(app);

  const io = require('socket.io')(server, {
    cors: {
      origin: process.env.CLIENT_ADDRESS,
      methods: ['GET', 'POST'],
    },
  });
  // @ts-ignore
  io.on('connection', (socket) => {
    console.log('Connected to server');
    socket.on('send-order', (order: any) => {
      socket.local.emit('new-order', order);
    });
    socket.on('remove-order', (id: any) => {
      socket.local.emit('delete-order', id);
    });
  });
  server.listen(port);
  console.log('Server running at port ', port);
};

startServer();
