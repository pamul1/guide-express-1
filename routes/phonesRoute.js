import express from 'express'
export const phones = express()
phones.use(express.json())
import { getPhone, postPhone, putPhone, deletePhone } from '../controllers/phonesController.js'

phones.get('/phones', getPhone)
phones.post('/phones', postPhone)
phones.put('/phones/:id', putPhone)
phones.delete('/phones/:id', deletePhone)