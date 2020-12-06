module.exports = (req,res) => {

        console.log(req.body.price)

        res.status(201).json('Saving your product')
}