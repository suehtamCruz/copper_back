import express from 'express';
const router = express.Router();

import {createReceita , findAll ,findAndUpdate , findAndRemove} from '../controllers/receitaController';

router.post('/',createReceita);
router.get('/',findAll);
router.put('/:id',findAndUpdate);
router.delete('/admin/:id',findAndRemove);


export default router;