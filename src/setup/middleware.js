const BodyParser = require('body-parser')
const morgan = require('morgan')

module.exports = (app) => {
 
    app.use(BodyParser.json())
    app.use(morgan('dev'))

}