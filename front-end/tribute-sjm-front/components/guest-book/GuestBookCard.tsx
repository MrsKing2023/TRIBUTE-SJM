export default function GuestBookCard(props: any) {

    return(
        <div className= "card" >
            <div className= "content">
            <div className= "">
            <p>Id: {props.guestBookEntry.id}</p>
            <p>First Name: {props.guestBookEntry.firstName}</p>
            <p>Last Name: {props.guestBookEntry.lastName}</p>
            <p>City: {props.guestBookEntry.city}</p>
            <p>State: {props.guestBookEntry.state} </p>
            <p>Relationship: {props.guestBookEntry.relationship}</p>
            <p>Entry: {props.guestBookEntry.entry}</p>
            </div>
            </div>
        </div>
    )
}