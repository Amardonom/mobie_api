const router = require('koa-router')()

router.post('/getGoodDetail',async(ctx)=>{
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
    // ctx.body = 123
})
module.exports = router