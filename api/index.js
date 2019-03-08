const Koa = require('koa')
let app = new Koa()

const router = require('koa-router')()
const user = require('./api/user')
const goods = require('./api/goods')

const {connect, initSchemas} = require('./database/init.js')

const bodyparse = require('koa-bodyparser')
const cors = require('koa2-cors')
const fs = require('fs')
const mongoose = require('mongoose')

//立即执行函数
;(async () =>{
    await connect()
    initSchemas()
})()


// 配置跨域
app.use(cors())
// bodyparser
app.use(bodyparse())
// 装载路由
router.use('/user',user.routes())
router.use('/goods',goods.routes())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('serve is at port 3000')
})