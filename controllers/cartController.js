const Cart= require('../modles/Cart')

exports.addToCart=async(req,res)=>{
    const {productID,name,price}=req.body

    if (!productID) return res.status(400).json({message:"Product ID is missing "})

    let cart = await Cart.findOne({userId:req.user.id})
    if (!cart){
        cart=new Cart({userId:req.user.id,items:[]})
    } 

    const existingitem = cart.items.find((item)=> item.productID && item.productID.toString() === productID.toString())

    if(existingitem){
        existingitem.quantity++
    }
    else{
        cart.items.push({productID,name,price})
    }
    await cart.save()
    res.json({cart,message:"Item added to cart"})
}

exports.getCart=async(req,res)=>{
    const cart=await Cart.findOne({userId:req.user.id})
    res.json(cart? cart.items:[])
}

exports.removeFromCart=async(req,res)=>{
    const {productID} = req.body
    let cart=await Cart.findOne ({userId:req.user.id})
    if(!cart) return res.status(400).json({message:"cart not found"})
        
    cart.items=cart.items.filter((item)=> item.productID !== productID)
    await cart.save()
    res.json({cart,message:"Item Removed from cart"})
}