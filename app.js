import express from 'express'
import actorRoutes from './routes/actorRoutes.js'

const app = express()
const port = 44221

app.use('/actor', actorRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})