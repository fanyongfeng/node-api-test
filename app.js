'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const koabody = require('koa-body')();
const router = new Router();
var cors = require('koa-cors');
const app = new Koa();

app.use(cors());

router.get('/api/list', 
  async ( ctx )=>{
    let result = {
      success: 0,
      data: [{
        name: '段延庆',
      }, {
        name: '乔峰',
      }]
    };
    ctx.body = result;
  });


app.use(router.routes()).use(router.allowedMethods())

app.on('error', function(err) {
  console.log(err);
});

// listen
app.listen(3002)
console.log('listening on port 3002, http://127.0.0.1:3002')
