import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { genRandomUuid } from 'App/Controllers/Helpers/utils'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // @column()
  // public uniqueId: string

  @column()
  public uniqueId: string = genRandomUuid()

  @column()
  public walletAddress: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
