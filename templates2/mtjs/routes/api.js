const router = require('koa-router')();

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    const body = {
      message: err.message,
    };
    if (ctx.status >= 500) {
      console.error(err);
    } else {
      body.data = err.data;
    }
    ctx.body = body;
  }
});

router.get('/error', async (ctx) => {
  ctx.throw(403, 'you are not allow here', {
    data: ctx.query,
  });
});

module.exports = router;
