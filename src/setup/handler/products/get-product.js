module.exports = (req,res) => {

  const id = req.params.productId

  if(id === 'special')
  {
      res.status(200).json({
          message:'You discovered the special ID',
          id:id
      })
  }else{
      res.status(200).json({
          message:'you passed an id'
      })
  }

}