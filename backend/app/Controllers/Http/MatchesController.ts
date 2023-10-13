import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Match from 'App/Models/Match'
import IpromiseResponse from 'App/interfaces/IpromiseResponse'

export default class MatchesController {
  public async index({ response }: HttpContextContract): Promise<IpromiseResponse> {
    const matches = await Match.all()
    let res = response.status(500)
    let msg = ''

    if (matches.length <= 0) {
      res = response.status(400)
      msg = 'Não existem partidas no sistema.'
      data: []
    } else {
      res = response.status(200)
      msg = 'Partidas encontradas:'
    }

    return { status: res.status, message: msg, data: matches }
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.body()

    if (data.user_id_one === data.user_id_two) {
      response.status(400)
      return { message: 'Usuário inválido.' }
    }

    const match = await Match.create(data)

    response.status(201)
    return { message: 'Partida criada com sucesso.', data: match }
  }
}
