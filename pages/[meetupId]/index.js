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

    const meetups = await meetupsCollection.find({}, { _id: 1 })

    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
                params: {
                    meetupId: 'm2'
                },
                params: {
                    meetupId: 'm3'
                },
                params: {
                    meetupId: 'm4'
                },
                params: {
                    meetupId: 'm5'
                },
                params: {
                    meetupId: 'm6'
                },
                params: {
                    meetupId: 'm7'
                },
                params: {
                    meetupId: 'm8'
                },
                params: {
                    meetupId: 'm9'
                },
                params: {
                    meetupId: 'm10'
                },
                params: {
                    meetupId: 'm11'
                },
                params: {
                    meetupId: 'm12'
                },
                params: {
                    meetupId: 'm13'
                },
                params: {
                    meetupId: 'm14'
                },
                params: {
                    meetupId: 'm15'
                },
            }
        ]
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