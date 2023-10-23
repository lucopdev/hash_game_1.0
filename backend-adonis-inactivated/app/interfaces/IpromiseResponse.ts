import { statusText } from '@ioc:Adonis/Core/Response'
import Match from 'App/Models/Match'

export default interface IpromiseResponse {
  status: statusText
  message: string
  data: Match[]
}
