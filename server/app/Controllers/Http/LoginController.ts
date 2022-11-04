import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Login from 'App/Models/Login'

export default class LoginController {
    public async index() {
        return "Not Allowed"
    }

    public async store(ctx: HttpContextContract) {
        const payload = ctx.request.body()

        const admin = await Login.create(payload)

        ctx.response.status(201)

        return { admin }

    }

    public async show(ctx: HttpContextContract) {
        const body = ctx.request.body()

        const admin = await Login.findOrFail(body.username, body.password)

        return { admin }
    }

    public async update() {

        return "Not Allowed"
    }

    public async destroy() {

        return "Not Allowed"
    }
}

