import koa from 'koa';

const app = new koa();

// Routes
app.use(async (ctx) => {
  ctx.body = `Request received: ${ctx.method} - ${ctx.path}`;
});

// Error handler
app.on('error', (err, ctx) => {
  console.error(err);
  if (ctx) {
    ctx.status = 500;
    ctx.body = 'Internal Serverless Error';
  }
});

module.exports = app;
