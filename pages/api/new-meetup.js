import { MongoClient } from "mongodb"
import { mongo_key } from "./api-keys"

// /api/new-meetup

const handler = (req, res) => 
{
    if (req.method === 'POST')
    {
        const data = req.body

        const { title, image, address, description } = data

        MongoClient.connect(mongo_key)
    }
}

export default handler