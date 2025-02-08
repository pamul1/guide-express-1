import { db } from "../db.js"

export const getPhone = async  (req, res) => {

    const sql = 'select * from phones'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postPhone = async (req, res) => {

    const tmp = req.body
    const str = 'insert into phones (phone_number, client_id) values ($1, $2)'
    const arr = [tmp.phone_number, tmp.client_id]
    const result = await db.query(str, arr)
    res.status(200).json({ message: "Number Added" })

}

export const putPhone =  async (req, res) => {
    const phone_id = req.params.id
    const tmp = req.body
    const arr = [tmp.phone_number, tmp.client_id, phone_id]

    const sql = ` update phones 
                 set phone_number = $1,
                     client_id = $2
                    where phone_id= $3`

    const resul = db.query(sql, arr)

    res.json({ message: "Number Added" })

}

export const deletePhone = async (req, res) => {

    const phone_id = req.params.id
    const sql = `delete from phones where phone_id = $1`
    const arr = [phone_id]

    const resul = await db.query(sql, arr)

    res.json({ message: "Number Deleted" })

}