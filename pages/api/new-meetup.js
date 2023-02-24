import { MongoClient } from "mongodb"
import { mongo_key } from "./api-keys"

// /api/new-meetup

const handler = async (req, res) => 
{
    if (req.method === 'POST')
    {
        const data = req.body

        const { title, image, address, description } = data

        const client = await MongoClient.connect(mongo_key)
        const db = client.db()
    }
}

export default handler