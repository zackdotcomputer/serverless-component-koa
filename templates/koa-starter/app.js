'use strict';

// eslint-disable-next-line import/no-unresolved
const Koa = require('koa');

const app = new Koa();

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
