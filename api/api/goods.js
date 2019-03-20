const router = require('koa-router')()
const mongoose = require('mongoose')

router.post('/getGoodDetail',async(ctx)=>{
    try {
        let goodid = ctx.request.body.goodsId
        const Goods = mongoose.model('Goods')
        await Goods.findOne({ID: goodid}).exec().then(async(res)=>{
            ctx.body = { code: 200, message: res}
        })
    }catch(err){
        ctx.body = {
            code: 500,
            message: err
        }
    }
})
router.get('/getCatagoryList',async(ctx)=>{
    try {
        const Catagory = mongoose.model('catagory')
        let res = await Catagory.find().exec()
        ctx.body = {
            code: 200,
            message: res
        }
    }catch(err){
        ctx.body = {
            code: 500,
            message: err
        }
    }
})
router.post('/getCategorySubList',async(ctx)=>{
    try{
        let categoryId = ctx.request.body.categoryId
        const CategorySub = mongoose.model('catagorySub')
        let result = await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }
})
router.post('/getGoodsListByCategorySubID',async(ctx)=>{
    try{
        let categorySubId = ctx.request.body.categoryId
        let page = ctx.request.body.page
        let num = 10
        let start = (page-1)*num
        const Goods = mongoose.model('Goods')
        let result = await Goods.find({SUB_ID:categorySubId})
        .skip(start) .limit(num).exec()
        ctx.body={code:200,message:result}
    }catch(err){
        ctx.body={code:500,message:err}
    }
})
module.exports = router