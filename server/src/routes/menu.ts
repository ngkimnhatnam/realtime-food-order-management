// Dependencies import
import express from 'express';

// Controllers import
import * as menuController from '../controllers/menu';

const router = express.Router();

router.get('/menus', menuController.getOrders);

export default router;
