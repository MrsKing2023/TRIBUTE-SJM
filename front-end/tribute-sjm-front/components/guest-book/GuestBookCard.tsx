import { useState } from "react"


interface GuestBookEntry {
  id: number,
  firstName: string,
  lastName: string,
  relationship: string,
  city: string,
  state: string,
  entry: string,

  }
    
  export default function GuestBookCard(props: any) {

    const webUrl: string = "http://localhost:8080"


    const [entry, setEntry] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
      event.preventDefault();

      const guestBookEntry = {
          id: Number(event.target.id.value),
          firstName: String(event.target.firstName.value),
          lastName: String(event.target.lastName.value),
          city: String(event.target.city.value),
          state: String(event.target.state.value),
          relationship: String(event.target.relationship.value),
          entry: String(event.target.entry.value),
      }

      fetch(webUrl + "/guestBook/update/" + props.guestBookEntry.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(guestBookEntry),
        }).then((response) => response.json()).then((guestBookEntry: GuestBookEntry[]) => {
            props.setGuestBookEntries (guestBookEntry);
            setEntry(prev => !prev)
        }) 

    }    
    
    return (
      <div className="card">

        {entry ?
        
        <form onSubmit={handleSubmit}>
          <h1><strong><i>Please Sign Guest Book</i></strong></h1>
          <div>
                    <h1>First Name:</h1>
                    <input type="text" autoComplete="off" id="firstName" defaultValue={props.guestBookEntry.firstName} required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>Last Name:</h1>
                    <input type="text" autoComplete="off" id="lastName" defaultValue={props.guestBookEntry.lastName} required minLength={3} maxLength={40} />
                </div>
                
                <div>
                    <h1>City:</h1>
                    <input type="text" autoComplete="off" id="city" defaultValue={props.guestBookEntry.city} required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>State:</h1>
                    <input type="text" autoComplete="off" id="state" defaultValue={props.guestBookEntry.state} required minLength={2} maxLength={40} />
                </div>

                <div>
                    <h1>Choose A Relationship</h1>
                    <select defaultValue={props.guestBookEntry.relationship} id="relationship" name="relationship">
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
                    <h1>Entry:</h1>
                    <textarea id="entry" name="entry" rows="5" cols="50" defaultValue={props.guestBookEntry.entry}></textarea>
                </div>
                <button className="bg-gray-500/80 p-2 rounded-md" type="submit">Submit</button>
                <button className= "bg-gray-500/80 p-2 rounded-md" onClick={() => setEntry(prev => !prev)}>Cancel</button>
                </form>
                
                :

        <div className="content">
        <p><strong>Id:</strong> {props.guestBookEntry.id}</p>
          <p><strong>First Name:</strong> {props.guestBookEntry.firstName}</p>
          <p><strong>Last Name:</strong> {props.guestBookEntry.lastName}</p>
          <p><strong>City:</strong> {props.guestBookEntry.city}</p>
          <p><strong>State:</strong> {props.guestBookEntry.state}</p>
          <p><strong>Relationship:</strong> {props.guestBookEntry.relationship}</p>
          <p><strong>Entry:</strong> {props.guestBookEntry.entry}</p>
          <button onClick={() => props.removeEntry(props.guestBookEntry.id)}className="bg-gray-500/80 mt-2 p-2 rounded-md">Delete</button>
          <button className= "bg-gray-500/80 p-2 rounded-md" onClick={() => setEntry(prev => !prev)}>Update Entry</button>
       </div>
        }
        </div>
        
    );
  }
  