const router = require('koa-router')();
const api = require('./api');

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
});

router.use('/api/v1', api.routes(), api.allowedMethods());

module.exports = router;
