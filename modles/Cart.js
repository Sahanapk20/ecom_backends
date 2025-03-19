const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    userId:String,
    items:[
        {
            productID:Number,
            name:String,
            price:Number
        }
    ]
})

module.exports=mongoose.model('Cart',cartSchema)