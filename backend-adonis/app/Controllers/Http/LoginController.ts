import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import generateToken from 'App/utils/token'

export default class LoginController {
  public async store({ auth, request, response }: HttpContextContract) {
    const { username, password } = request.all()

    const user = await User.query().where('username', username)
    if (!user) {
      return response.badRequest({ message: `${username} doesn't exist` })
    }

    try {
      const token = await generateToken(auth, username, password)
      process.env.TOKEN = token.token

      return response
        .status(200)
        .json({ status: 'SUCCESSFUL', message: `User ${username} is logged`, token })
    } catch (e) {
      return response.status(500).json({ status: 'ERROR', message: e.responseText })
    }
  }
}
