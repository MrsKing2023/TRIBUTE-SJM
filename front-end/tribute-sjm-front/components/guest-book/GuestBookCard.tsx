export default function GuestBookCard(props: any) {

    return(
        <div>
            <p>Id: {props.guestBookEntry.id}</p>
            <p>Entry: {props.guestBookEntry.entry}</p>
            <p>First Name: {props.guestBookEntry.firstName}</p>
            <p>Last Name: {props.guestBookEntry.lastName}</p>
            <p>Relationship: {props.guestBookEntry.relationship}</p>
            <p>City: {props.guestBookEntry.city}</p>
            <p>State: {props.guestBookEntry.state} </p>
        </div>
    )
}