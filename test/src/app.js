'use strict';

const koa = require('koa');

const app = koa();

app.use(async (ctx) => {
  if (ctx.path === '/cookie') {
    ctx.body = `${ctx.request.headers.cookie}`;
  } else {
    ctx.body = 'hello world';
  }
});

module.exports = app;
