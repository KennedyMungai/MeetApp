import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS =
    [
        {
            id: 'm1',
            title: 'A first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/COLLECTIE_TROPENMUSEUM_Zicht_op_Nairobi_met_op_de_voorgrond_het_stadspark_met_tribune_TMnr_20014416.jpg/250px-COLLECTIE_TROPENMUSEUM_Zicht_op_Nairobi_met_op_de_voorgrond_het_stadspark_met_tribune_TMnr_20014416.jpg'
        }
    ]

const HomePage = () =>
{
    return (
        <MeetupList meetups={ } />
    )
}

export default HomePage