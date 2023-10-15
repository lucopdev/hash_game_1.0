import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class LoginController {
  public async store({ auth, request, response }: HttpContextContract) {
    const { username, password } = request.all()

    const user = await User.query().where('username', username)
    if (!user) {
      return response.badRequest({ message: `${username} doesn't exist` })
    }

    try {
      const token = await auth.use('api').attempt(username, password)
      return response
        .status(200)
        .json({ status: 'SUCCESSFUL', message: `User ${username} is logged`, token })
    } catch (e) {
      return response.status(500).json({ status: 'ERROR', message: 'User not logged ---> ' + e })
    }
  }
}
