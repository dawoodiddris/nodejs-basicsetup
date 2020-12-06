const express = require('express')
const setupMiddleware = require('../src/setup/middleware')
const setupRouter = require('../src/setup/router')

const app = express()

setupMiddleware(app)
setupRouter(app)


app.listen(3000, () => {
    console.log('listing on port 3000')
})