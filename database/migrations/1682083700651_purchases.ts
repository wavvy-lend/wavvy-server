import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'purchases'


  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('unique_id').unique()
      table.string('network').notNullable()
      table.string('order_id')
      table.string('user_address').notNullable()
      table.string('contract_purchase_id').notNullable()
      table.string('contract_pool_id').notNullable()
      table.string('contract_loan_id').notNullable()
      table.string('escrow_address')
      table.string('token_address').notNullable()
      table.string('token_id').notNullable()
      table.string('down_payment').notNullable()
      table.string('status').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
