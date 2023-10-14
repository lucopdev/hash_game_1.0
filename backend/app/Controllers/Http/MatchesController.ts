import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Match from 'App/Models/Match'

export default class MatchesController {
  public async index({ response }: HttpContextContract): Promise<void> {
    try {
      const matches = await Match.all()

      return response.status(200).json({ data: matches })
    } catch (e) {
      return response.status(200).json({ message: "There's no matches in database" })
    }
  }

  public async store({ request, response }: HttpContextContract): Promise<void> {
    try {
      const match = request.body()
      if (match.user_id_one === match.user_id_two) {
        return response.status(400).json({ message: 'Player allready in-game' })
      }

      const matchResponse = await Match.create(match)

      return response.status(200).json(matchResponse)
    } catch (e) {
      return response.status(200).json({ message: 'Player not found' })
    }
  }
}
