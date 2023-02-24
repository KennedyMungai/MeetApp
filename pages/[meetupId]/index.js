import MeetupDetail from "../../components/meetups/MeetupDetail"

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