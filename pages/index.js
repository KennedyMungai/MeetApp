import { useEffect, useState } from "react"
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS =
    [
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm2',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm3',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm4',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm5',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm6',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm7',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm8',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm9',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm10',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm11',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm12',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm13',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm14',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm15',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },

    ]

const HomePage = (props) =>
{
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() =>
    {
        setLoadedMeetups(DUMMY_MEETUPS)
    }, [])


    return (
        <MeetupList meetups={loadedMeetups} />
    )
}

export async function getStaticProps()
{
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage