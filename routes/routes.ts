import express from 'express';
const router = express.Router();

import {createReceita , findAll } from '../controllers/receitaController';

router.post('/',createReceita);
router.get('/',findAll);


export default router;