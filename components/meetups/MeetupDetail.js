const MeetupDetail = (props) =>
{
    const { image, title, address, description } = props

    return (
        <>
            <img
                src={image}
                alt={title}
            />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </>
    )
}

export default MeetupDetail