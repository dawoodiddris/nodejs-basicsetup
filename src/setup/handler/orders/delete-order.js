module.exports = (req,res,next) => {

    res.status(200).json({
        message:'delete this order',
        id:req.params.orderId
    })

}