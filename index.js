import express from 'express'
const app = express()
app.use(express.json())
import { clients } from './routes/clientsRoute.js'
import { phones } from './routes/phonesRoute.js'

app.use(clients)
app.use(phones)

app.listen(3000)