export default function CondolenceEntryCard(props: any) {

    return (
        <div className="border-2 p-2 m-2 bg-gray-100">
            <p>Id: {props.entry.id}</p>
            <p>Entry: {props.entry.entry}</p>
            <p>First Name: {props.entry.firstName}</p>
            <p>Last Name: {props.entry.lastName}</p>
            <p>Relationship: {props.entry.relationship}</p>
            <p>Email Address: {props.entry.emailAddress}</p>
            <p>City: {props.entry.city}</p>
            <p>State: {props.entry.state} </p>
            <button onClick={() => props.removeEntry(props.entry.id)}className="bg-red-500/80 mt-2 p-2 rounded-md">Delete</button>

        </div>
    )
}

