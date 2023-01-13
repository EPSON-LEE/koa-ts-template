import Koa, { DefaultContext, DefaultState, Context } from 'koa'

const app: Koa<DefaultState, DefaultContext> = new Koa()

app.use((ctx: Context) => {
	ctx.body = 'Hello World'
})

app.listen(3000, () => {
	console.log('Server is running at http://127.0.0.1:3000')
})
