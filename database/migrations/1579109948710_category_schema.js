'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('aw_categories', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
