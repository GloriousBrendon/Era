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
        })

        const payload = await request.validate({schema: newTeamSchema})

        const team = await Team.create(payload)

        response.status(201)

        return team;
    }

    public async show(ctx: HttpContextContract) {
        const { id } = ctx.request.params()

        const team = await Team.find(id)

        await team?.load('players')

        return { team }
    }

    public async update({params, request}: HttpContextContract) {
        const body = request.body() //TODO: Validation

        const team = await Team.findOrFail(params.id)

        team.team_name = body.name

        team.active = body.active

        return team.save()
    }

    public async destroy({params, response}: HttpContextContract) {
        const team = await Team.findOrFail(params.id)

        response.status(204)

        return team.delete()
    }
}
