import { Router } from 'express';
import siteRouter from './site';
import accountsRouter from './accounts';

var router = Router();

router.use('/accounts', accountsRouter);
/* GET home page. */
router.use('/', siteRouter);

export default router;
