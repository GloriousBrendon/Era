import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public active: boolean

  @column()
  public team_name: string

  @column()
  public top: string

  @column()
  public jungle: string

  @column()
  public mid: string

  @column()
  public bot: string

  @column()
  public supp: string

  @column()
  public sub1: string

  @column()
  public sub2: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
