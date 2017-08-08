const Koa = require('koa');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('mt-koa-logger');

const index = require('./routes/index');

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(`${__dirname}/public`));

// routes
app.use(index.routes(), index.allowedMethods());

module.exports = app;
