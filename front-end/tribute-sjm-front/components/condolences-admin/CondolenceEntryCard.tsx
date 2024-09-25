import { useState } from "react"

interface CondolenceEntry {
    id: Number,
    entry: String,
    firstName: String,
    lastName: String,
    relationship: String,
    city: String,
    state: String,
}

export default function CondolenceEntryCard(props: any) {

    const webUrl: string = "http://localhost:8080"

    const [entry, setEntry] =useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const condolenceEntry = {
            id: Number(event.target.id.value),
            entry: String(event.target.entry.value),
            firstName: String(event.target.firstName.value),
            lastName: String(event.target.lastName.value),
            relationship: String(event.target.relationship.value),
            city: String(event.target.city.value),
            state: String(event.target.state.value),
        }
        
        fetch(webUrl + "/admin/update/" + props.condolenceEntry.id, {
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
                    <textarea id="entry" name="entry" rows="5" cols="50" defaultValue={props.condolenceEntry.entry} placeholder="What would you like to say about Susan?"></textarea>
                </div>


                <div>
                    <h1>First Name:</h1>
                    <input type="text" autoComplete="off" id="firstName" defaultValue={props.condolenceEntry.firstName} placeholder="First Name" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>Last Name:</h1>
                    <input type="text" autoComplete="off" id="lastName" defaultValue={props.condolenceEntry.lastName} placeholder="Last Name" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1 className="entryBox">Choose A Relationship</h1>
                    <select defaultValue={props.condolenceEntry.relationship} id="relationship" name="relationship">
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
                    <h1>City:</h1>
                    <input type="text" autoComplete="off" id="city" defaultValue={props.condolenceEntry.city} placeholder="City" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>State:</h1>
                    <input type="text" autoComplete="off" id="state" defaultValue={props.condolenceEntry.state} placeholder="State" required minLength={2} maxLength={40} />
                </div>
                <button className= "bg-green-500/80 p-2 rounded-md" type="submit">Submit</button>
                <button className= "bg-red-500/80 p-2 rounded-md" onClick={() => setEntry(prev => !prev)}>Cancel</button>


            </form>

            :
            <div>
            <p>Id:{props.condolenceEntry.id}</p>
            <p>Entry: {props.condolenceEntry.entry}</p>
            <p>First Name: {props.condolenceEntry.firstName}</p>
            <p>Last Name: {props.condolenceEntry.lastName}</p>
            <p>Relationship: {props.condolenceEntry.relationship}</p>
            <p>City: {props.condolenceEntry.city}</p>
            <p>State: {props.condolenceEntry.state} </p>
            <button onClick={() => props.removeEntry(props.condolenceEntry.id)}className="bg-red-500/80 mt-2 p-2 rounded-md">Delete</button>
            <button onClick={() => setEntry(prev => !prev)} className="bg-green-500/80 mt-2 p-2 rounded-md">Update Entry</button>
            </div>
            }

        </div>
    )
}

