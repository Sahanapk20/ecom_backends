const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    userId:String,
    items:[
        {
            productId:Number,
            name:String,
            price:Number
        }
    ]
})

module.exports=mongoose.model('Cart',cartSchema)