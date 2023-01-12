import Koa, { DefaultContext, DefaultState, Context } from "koa"

// import dotenv from 'dotenv'
// dotenv.config()
// const { PORT, HOST } = process.env

const app: Koa<DefaultState, DefaultContext> = new Koa()

app.use((ctx: Context) => {
	ctx.body = "coderlzw"
})

app.listen(3000, () => {
	console.log("Server serving at http://127.0.0.1:3000")
})
