// 16 - importamos a Classe Router do express
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productsController from './controller/productsController'
import userController from './controller/userController'

// 17 - criamos uma constante que recebe o objeto Router
const routes = Router()

// 18 - executamos o método get de Router() , e passamos como parametro, o nome da rota que queremos criar
// e o método que deve ser executado quando esta rota for chamada
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.findUsers)
routes.post('/users', userController.createUser)
routes.post('/products', productsController.createJSON)
routes.get('/products', productsController.readJSON)
routes.get('/products-stock',productsController.createStockJSON)
// 19 - exportar a constante routes
export default routes