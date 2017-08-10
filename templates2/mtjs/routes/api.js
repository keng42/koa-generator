const router = require('koa-router')();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    ctx.status = err.status || 400;
    delete err.status;
    ctx.body = err;
  }
});

router.get('/error', async (ctx) => {
  const err = {
    message: 'you are not allow here',
    status: 403,
    data: ctx.query,
  };
  throw err;
});

module.exports = router;
