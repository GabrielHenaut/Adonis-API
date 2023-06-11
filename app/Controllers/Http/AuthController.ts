import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Auth from 'App/Models/Auth'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async register({request, response} : HttpContextContract) {
	const validations = schema.create({
	  name: schema.string({trim: true}, [
		rules.minLength(3),
		rules.maxLength(255)
	  ]),
	  email: schema.string({trim: true}, [
		rules.email(),
		rules.unique({table: 'auths', column: 'email'})
	  ]),
	  password: schema.string({trim: true}, [
		rules.minLength(3),
		rules.maxLength(255),
		rules.confirmed()
	  ])
	})
	const data = await request.validate({
	  schema: validations
	})
	const user = await Auth.create(data)

	return response.status(201).json({message: 'User created', user: user})
  }

  public async login({request, response, auth} : HttpContextContract) {
	  const email = request.input('email')
	  const password = request.input('password')

	  // Lookup user manually
	  const user = await Auth
	  .query()
	  .where('email', email)
	  .firstOrFail()

	  // Verify password
	  if (!(await Hash.verify(user.password, password))) {
		  return response.unauthorized('Invalid credentials')
	  }

	  // Generate token
	  const token = await auth.use('api').generate(user)
	  return response.json({message: 'Login success', token: token})
  }
}

