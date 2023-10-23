import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    if (!users) {
      response.status(400)
      return { msg: 'Não existem usuários no sistema' }
    }

    response.status(200)

    const userResponse = users.map((user) => {
      return {
        username: user.username,
        created_at: user.createdAt,
      }
    })

    return userResponse
  }

  public async store({ request, response }) {
    const data = request.body()
    const user = await User.create(data)

    response.status(201)

    return { message: 'Usuário criado com sucesso.', data: user }
  }
}
