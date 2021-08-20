import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import 'express-async-errors';
import { errors } from 'celebrate';
import AppError from '@shared/errors/AppError';
import routes from './routes';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(routes);

const server = http.createServer(app);

server.listen(3001, () => {
  console.log('Listening in port 3000');
});
