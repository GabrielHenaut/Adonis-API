import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
	  const products = await Product.all()

	  return {
		  data: products
	  }
  }

  public async store({request, response}: HttpContextContract) {
		const body = request.body()
		const product = await Product.create(body)

		response.status(201)

		return response.status(201).json({
			message: 'Product created',
			data: product
		})
  }

  public async show({request}: HttpContextContract) {
		const product = await Product.findOrFail(request.param('id'))

		return {
			data: product
		}
  }

  public async update({request}: HttpContextContract) {
		const product = await Product.findOrFail(request.param('id'))
		const body = request.body()

		product.merge(body).save()
		return {
			msg: 'Product updated',
			data: product
		}
  }

  public async destroy({request}: HttpContextContract) {
		const product = await Product.findOrFail(request.param('id'))
		await product.delete()

		return {
			msg: 'Product deleted',
			data: product
		}
  }

}
