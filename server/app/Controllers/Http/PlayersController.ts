import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Player from 'App/Models/Player'
import Team from 'App/Models/Team'

export default class GamesController {
    public async index() {
        return Player.all() // select * from players
    }

    public async store(ctx: HttpContextContract) {
        const { team:id, ...payload } = ctx.request.body()

        const player = await Player.create({...payload })

        const team = await Team.find(id)

        if(team) {
            team.related("players").save(player)
        }

        ctx.response.status(201)

        return { player }

    }

    public async show(ctx: HttpContextContract) {
        const { id } = ctx.request.params()

        const player = await Player.find(id)

        await player?.load('team')

        return { player }
    }

    public async update({params, request}: HttpContextContract) {
        const body = request.body() //TODO: Validation

        const player = await Player.findOrFail(params.id)

        player.name = body.name

        player.active = body.active

        player.position = body.position

        return player.save()
    }

    public async destroy({params, response}: HttpContextContract) {
        const player = await Player.findOrFail(params.id)

        response.status(204)

        return player.delete()
    }
}
