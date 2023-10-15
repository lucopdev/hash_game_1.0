import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class LoginController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.body()
      const registeredUser = await User.create(data)

      return response.status(200).json(registeredUser)
    } catch (e) {
      return response.badRequest({ message: "User couldn't be registered OR already registered" })
    }
  }
}
