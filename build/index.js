import Koa from 'koa'
import serve from 'koa-static'
import convert from 'koa-convert'
import path from 'path'
import webpack from 'webpack'
import historyApiFallback from '@overra/koa-history-api-fallback'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import devConfig from './webpack.dev'
import prodConfig from './webpack.prod'

const app = new Koa()
const publicPath = convert(serve(path.join(__dirname, '../src/index.html')))

app.use(publicPath)

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
