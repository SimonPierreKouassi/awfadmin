'use strict'

const Actualite = use('App/Models/Actualite');
class ActualiteController {

    //ShowActualite({view}){
        //return view.render('article')
    //}

    async index({view, request, response}) {
        const actualites = await Actualite.all();
          
        //Fetch all user's thematiques
        return view.render('article', { actualites: actualites.rows})
    }

    create({request, response, view}) {
        return view.render('Actualite.article')
    }

    async store({request, response, view, session}) {
        const actualite = new Actualite();
        
        actualite.title = request.input('title');
        actualite.article = request.input('article');
        actualite.photo = request.input('photo');
        await actualite.save();
       

        session.flash({ notification: 'Successfully create!' });
        return response.route('Actualite.article')
    }

    async edit({request, response, view, params}) {
        const id = params.id;
        const actualite = await Actualite.find(id);

        return view.render('article', {actualite : Actualite})
    }

    async update({request, response, view, params, session}) {
        const id = params.id;
        const actualite = await Actualite.find(id);
        actualite.name = request.input('title'),
        await actualite.save();

        session.flash({ notification: 'Successfully update!' });
        response.redirect('/article')
    }

    async delete({request, response, view, params, session}) {
        const id = params.id;
        const actualite = await Actualite.find(id);
        await actualite.delete();

        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/article')
    }

}

module.exports = ActualiteController
