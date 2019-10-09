'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adoadonis make:validator LoginUsernisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('home', 'TestController.home').as('home')

Route.get('speakers', 'SpeakerController.ShowSpeakers')

Route.post('logout', 'Auth/LogoutController.logout').as('logout')

Route.get('/', 'Auth/LoginController.showLogin')
Route.post('login', 'Auth/LoginController.login').validator('LoginAdmin')

Route.resource('speakers', 'SpeakerController').except(['index, show']).validator(new Map ([
    [['Speakers.store'],['storeSpeaker']]
]))

//ajout thematique
Route.get('/thematique', 'ThematiqueController.index').as('Thematique.index')
Route.get('/thematique', 'ThematiqueController.thematique').as('Thematique.thematique')
Route.post('/thematique', 'ThematiqueController.create')
Route.get('/edit/:id', 'ThematiqueController.edit').as('Thematique.edit')
Route.get('/delete/:id', 'ThematiqueController.delete').as('Thematique.delete')
Route.post('/store', 'ThematiqueController.store').as('Thematique.store')
Route.post('/update/:id', 'ThematiqueController.update').as('Thematique.update')

//ajout article
Route.get('/article', 'ActualiteController.index').as('Actualite.index')
Route.get('/article', 'ActualiteController.article').as('Actualite.article')
Route.post('/article', 'ActualiteController.create')
Route.get('/edit/:id', 'ActualiteController.edit').as('Actualite.edit')
Route.get('/delete/:id', 'ActualiteController.delete').as('Actualite.delete')
Route.post('/stores', 'ActualiteController.store').as('Actualite.store')
Route.post('/update/:id', 'ActualiteController.update').as('Actualite.update')