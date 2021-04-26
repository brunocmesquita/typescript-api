import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/', (req, res) => {
  res.json({ message: 'Hello dev!' });
});

export default routes;
