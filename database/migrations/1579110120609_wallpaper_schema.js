'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WallpaperSchema extends Schema {
  up () {
    this.create('aw_wallpapers', (table) => {
      table.increments()
      table.timestamps()
      table.integer('categories_id').unsigned()
      table.foreign('categories_id').references('aw_categories.id')
      table.text('caption')
      table.text('link')
    })
  }

  down () {
    this.drop('wallpapers')
  }
}

module.exports = WallpaperSchema
