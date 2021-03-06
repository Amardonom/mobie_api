const mongoose = require('mongoose')    //引入Mongoose
mongoose.set('useCreateIndex', true)
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型

// const bcrypt =require('bcrypt')

//创建我们的用户Schema
const userSchema = new Schema({
    UserId:ObjectId,
    username:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}
})

// //每次存储数据时都要执行
// userSchema.pre('save', function(next){
//     //let user = this
//     bcrypt.genSalt( saltRounds,(err,salt)=>{
//         if(err) return next(err)
//         bcrypt.hash(this.password,salt, (err,hash)=>{
//             if(err) return next(err)
//             this.password = hash
//             next()
//         }) 
//     })
// })

//发布模型
mongoose.model('User',userSchema)