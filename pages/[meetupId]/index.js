import { MongoClient } from "mongodb"
import MeetupDetail from "../../components/meetups/MeetupDetail"
import { mongo_key } from "../api/api-keys"

const MeetupDetailsPage = () =>
{
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg'
            title='Meetup at Nairobi'
            address='Nairobi City, Nairobi'
            description='We will be meeting up in Nairobi at sunset'
        />
    )
}

export async function getStaticPaths()
{
    const client = await MongoClient.connect(mongo_key)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    return {
        fallback: true,
        paths: meetups.map((meetup) =>
        ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

export async function getStaticProps(context)
{
    const meetupId = context.params.meetupId

    console.log(meetupId)

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
                id: meetupId,
                title: 'Meetup at Nairobi',
                address: 'Nairobi City, Nairobi',
                description: 'We will be meeting up in Nairobi at sunset',
            }
        }
    }
}

export default MeetupDetailsPage