import express from 'express'
export const clients = express()
clients.use(express.json())
import { getClient, postClient, putClient, deleteClient } from '../controllers/clientsController.js'

clients.get('/clients', getClient)
clients.post('/clients', postClient)
clients.put('/clients/:id', putClient)
clients.delete('/clients/:id', deleteClient)