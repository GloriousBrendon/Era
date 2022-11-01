import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'teams'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('active').notNullable()
      table.string('team_name').notNullable()
      table.string('top').notNullable()
      table.string('jungle').notNullable()
      table.string('mid').notNullable()
      table.string('bot').notNullable()
      table.string('supp').notNullable()
      table.string('sub1').nullable()
      table.string('sub2').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
