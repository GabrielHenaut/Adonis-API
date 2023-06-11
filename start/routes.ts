/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
	Route.group(() => {
		Route.post('/logout', 'AuthController.logout')
		Route.post('/login', 'AuthController.login')
		Route.post('/register', 'AuthController.register')
		Route.group(() => {
			Route.get('/', 'UsersController.index')
			Route.get('/:id', 'UsersController.show')
			Route.put('/:id', 'UsersController.update')
			Route.delete('/:id', 'UsersController.destroy')
		}).middleware('auth')
	}).prefix('/user')
	Route.get('/produts', 'ProductsController.index')
	Route.get('/produts/:id', 'ProductsController.show')
	Route.group(() => {
		Route.post('/produts', 'ProductsController.store')
		Route.put('/produts/:id', 'ProductsController.update')
		Route.delete('/produts/:id', 'ProductsController.destroy')
	}).middleware('auth')
}).prefix('/api')
