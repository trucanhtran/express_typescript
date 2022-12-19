import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello' });
});

export default router;
