const MeetupDetail = (props) =>
{
    return (
        <>
            <img src={props.img} alt='Nairobi Sunset' />
            <h1>Meetup at Nairobi</h1>
            <address>Some address</address>
            <p>We will be meeting up in Nairobi at sunset</p>
        </>
    )
}

export default MeetupDetail