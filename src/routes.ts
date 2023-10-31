
import { app } from './server';

import { Router, Request, Response } from 'express';

import { Character } from './types/types';

const player = new Character('Druida', 80,10,10,60);

console.log(player);

export const route = Router()

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})
