import { MongoClient } from "mongodb"

// /api/new-meetup

const handler = (req, res) => 
{
    if (req.method === 'POST')
    {
        const data = req.body

        const { title, image, address, description } = data


    }
}

export default handler