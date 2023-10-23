import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Match extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id_one: number

  @column()
  public user_id_two: number
  
  @column()
  public score_user_one: number

  @column()
  public score_user_two: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
