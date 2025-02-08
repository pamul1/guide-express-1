import { db } from "../db.js"

export const getClient = async  (req, res) => {

    const sql = 'select * from clients'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postClient = async (req, res) => {

    const tmp = req.body
    const str = 'insert into clients (client_name, email) values ($1, $2)'
    const arr = [tmp.client_name, tmp.email]
    const result = await db.query(str, arr)
    res.status(200).json({ message: "Client Created" })

}

export const putClient = async (req, res) => {
    const client_id = req.params.id
    const tmp = req.body
    const arr = [tmp.client_name, tmp.email, client_id]

    const sql = ` update clients
                 set client_name = $1, 
                    email = $2 
                    where client_id= $3`

    const resul = db.query(sql, arr)

    res.json({ message: "Client Updated" })

}

export const deleteClient = async (req, res) => {

    const client_id = req.params.id
    const sql = `delete from clients where client_id = $1`
    const arr = [client_id]

    const resul = await db.query(sql, arr)

    res.json({ message: "Client Deleted" })

}