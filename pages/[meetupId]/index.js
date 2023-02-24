import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const MeetupDetailsPage = () =>
{
    const addMeetupHandler = (enteredMeetupData) =>
    {
        console.log(enteredMeetupData)
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default MeetupDetailsPage