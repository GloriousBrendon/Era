import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Team from 'App/Models/Team'

export default class GamesController {
    public async index() {
        return Team.all() // select * from teams
    }

    public async store({request, response}: HttpContextContract) {
        const newTeamSchema = schema.create({
            active: schema.boolean(),
            team_name: schema.string({ trim: true }),
            top: schema.string({ trim: true }),
            jungle: schema.string({ trim: true }),
            mid: schema.string({ trim: true }),
            bot: schema.string({ trim: true }),
            supp: schema.string({ trim: true }),
            sub1: schema.string({ trim: true }),
            sub2: schema.string({ trim: true }),
        })

        const payload = await request.validate({schema: newTeamSchema})

        const team = await Team.create(payload)

        response.status(201)

        return team;
    }

    public async show({params}: HttpContextContract) {
        return Team.findOrFail(params.id)
    }

    public async update({params, request}: HttpContextContract) {
        const body = request.body() //TODO: Validation

        const team = await Team.findOrFail(params.id)

        team.team_name = body.name

        team.top = body.top

        team.jungle = body.jungle

        team.mid = body.mid

        team.bot = body.bot

        team.supp = body.supp

        team.sub1 = body.sub1

        team.sub2 = body.sub2

        return team.save()
    }

    public async destroy({params, response}: HttpContextContract) {
        const team = await Team.findOrFail(params.id)

        response.status(204)

        return team.delete()
    }
}
