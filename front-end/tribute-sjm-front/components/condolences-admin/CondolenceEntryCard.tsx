import { useState } from "react"

interface CondolenceEntry {
    entry: String,
    firstName: String,
    lastName: String,
    relationship: String,
    emailAddress: String,
    city: String,
    state: String,
}

export default function CondolenceEntryCard(props: any) {

    const webUrl: string = "http://localhost:8080"

    const [entry, setEntry] =useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const condolenceEntry = {
            entry: String(event.target.entry.value),
            firstName: String(event.target.firstName.value),
            lastName: String(event.target.lastName.value),
            relationship: String(event.target.relationship.value),
            emailAddress: String(event.target.emailAddress.value),
            city: String(event.target.city.value),
            state: String(event.target.state.value),
        }
        
        fetch(webUrl + "/admin/update/" + props.entry.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(condolenceEntry),
            }).then((response) => response.json()).then((condolenceEntry: CondolenceEntry[]) => {
                props.setCondolenceEntries(condolenceEntry);
                setEntry(prev => !prev)

            }) 
    
    }

    return (
        <div className="border-2 p-2 m-2 rounded-md bg-gray-100">
            
            {entry ?
            
            <form onSubmit={handleSubmit}>
                <h1>Guest Book</h1>
                <div>
                    <h1>Entry:</h1>
                    <textarea id="entry" name="entry" rows="5" cols="50" defaultValue={props.entry.entry} placeholder="What would you like to say about Susan?"></textarea>
                </div>


                <div>
                    <h1>First Name:</h1>
                    <input type="text" autoComplete="off" id="firstName" defaultValue={props.entry.firstName} placeholder="First Name" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>Last Name:</h1>
                    <input type="text" autoComplete="off" id="lastName" defaultValue={props.entry.lastName} placeholder="Last Name" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1 className="entryBox">Choose A Relationship</h1>
                    <select defaultValue={props.entry.relationship} id="relationship" name="relationship">
                    <option value="default">Choose A Relationship</option>
                    <option value="family">Family</option>
                    <option value="friend">Friend</option>
                    <option value="coworker">Coworker</option>
                    <option value="classmate">Classmate</option>
                    <option value="acquaintance">Acquaintance</option>
                    <option value="daughter">Daughter</option>
                    <option value="brother">Brother</option>
                    <option value="niece">Niece</option>
                    <option value="nephew">Nephew</option>
                    <option value="neighbor">Neighbor</option>
                    <option value="grandchild">Grandchild</option>
                    <option value="son">Son</option>
                    </select>
                </div>

                <div>
                    <h1>Email Address:</h1>
                    <input type="text" autoComplete="off" id="emailAddress" defaultValue={props.entry.emailAddress} placeholder="Email Address" required minLength={3} maxLength={40} />
                </div>
                
                <div>
                    <h1>City:</h1>
                    <input type="text" autoComplete="off" id="city" defaultValue={props.entry.city} placeholder="City" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>State:</h1>
                    <input type="text" autoComplete="off" id="state" defaultValue={props.entry.state} placeholder="State" required minLength={2} maxLength={40} />
                </div>
                <button className= "bg-green-500/80 p-2 rounded-md" type="submit">Submit</button>
                <button className= "bg-red-500/80 p-2 rounded-md" onClick={() => setEntry(prev => !prev)}>Cancel</button>


            </form>

            :
            <div>
            <p>Id: {props.entry.id}</p>
            <p>Entry: {props.entry.entry}</p>
            <p>First Name: {props.entry.firstName}</p>
            <p>Last Name: {props.entry.lastName}</p>
            <p>Relationship: {props.entry.relationship}</p>
            <p>Email Address: {props.entry.emailAddress}</p>
            <p>City: {props.entry.city}</p>
            <p>State: {props.entry.state} </p>
            <button onClick={() => props.removeEntry(props.entry.id)}className="bg-red-500/80 mt-2 p-2 rounded-md">Delete</button>
            <button onClick={() => setEntry(prev => !prev)} className="bg-green-500/80 mt-2 p-2 rounded-md">Update Entry</button>
            </div>

            }

        </div>
    )
}

