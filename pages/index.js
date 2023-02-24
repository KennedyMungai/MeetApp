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
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/NBO5.jpg/267px-NBO5.jpg',
            address: 'Nairobi City, Nairobi',
            description: 'Nairobi in the 1970s'
        },

    ]

const HomePage = () =>
{
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage