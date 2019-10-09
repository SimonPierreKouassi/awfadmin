'use strict'

/*
|--------------------------------------------------------------------------
| ActualiteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ActualiteSeeder {
  async run () {
    await Factory
    .model('App/Models/Actualite')
    .createMany(4)
  }
}

module.exports = ActualiteSeeder
