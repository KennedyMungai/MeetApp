import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"
import { mongo_key } from "./api/api-keys"

const HomePage = (props) =>
{
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps()
{
    const client = await MongoClient.connect(mongo_key)
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.findAll().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map((meetup) =>
            ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}

// export async function getServerSideProps(context)
// {
//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage