import Koa from 'koa'
import path from 'path'
import webpack from 'webpack'
import serve from 'koa-static'
import historyApiFallback from '@overra/koa-history-api-fallback'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import devConfig from './webpack.dev'
import prodConfig from './webpack.prod'

const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes()).use(router.allowedMethods())
app.use(serve(path.join(__dirname, '../dist/')))

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
const compiler = webpack(config)

const webpackMiddleware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
})

app.use(hotMiddleware(compiler))
app.use(webpackMiddleware) // serve up webpack content
app.use(historyApiFallback()) // catch any other requests and redirect to /index.html
app.use(webpackMiddleware)

// Serve the files on port 3000.
app.listen(process.env.PORT || 3000)
