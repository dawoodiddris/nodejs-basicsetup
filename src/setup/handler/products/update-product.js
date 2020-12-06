module.exports = (req, res, next) => {
     
   const id = req.params.productId

    res.status(200).json({
        message:'updated products',
        id:id
    })
}