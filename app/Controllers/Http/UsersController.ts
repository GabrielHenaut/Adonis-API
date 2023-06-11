import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/Auth'

export default class UsersController {
  public async index({}: HttpContextContract) {
	  const user = await User.all()

	  return {
		  data: user
	  }
  }

  public async show({request}: HttpContextContract) {
		const user = await User.findOrFail(request.param('id'))

		return {
			data: user
		}
  }

  public async update({request}: HttpContextContract) {
		const user = await User.findOrFail(request.param('id'))
		const body = request.body()

		user.merge(body).save()
		return {
			msg: 'User updated',
			data: user
		}
  }

  public async destroy({request}: HttpContextContract) {
		const user = await User.findOrFail(request.param('id'))
		await user.delete()

		return {
			msg: 'User deleted',
			data: user
		}
  }
}
