import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store({ request, response }: HttpContextContract) {
    const { token } = request.all()

    try {
      if (process.env.TOKEN === token) {

        return response.status(200).json({ status: 'SUCCESSFUL', message: 'Token is valid' })
      }
      return response.status(400).json({ status: 'ERROR', message: 'Token is not valid' })
    } catch (e) {
      return response.status(500).json({ status: 'ERROR', message: 'Token is not valid' })
    }
  }
}
