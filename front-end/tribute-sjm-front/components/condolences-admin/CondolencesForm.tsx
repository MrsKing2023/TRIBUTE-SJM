'use client'

interface CondolenceEntry {
    firstName: String,
    lastName: String,
    city: String,
    state: String,
    relationship: String,
    entry: String,

}

export default function CondolencesForm(props:any) {

    const webUrl: string = "http://localhost:8080"

    const handleSubmit = async(event: any) => {
        event.preventDefault();

        const condolenceEntry = {
            firstName: String(event.target.firstName.value),
            lastName: String(event.target.lastName.value),
            city: String(event.target.city.value),
            state: String(event.target.state.value),
            relationship: String(event.target.relationship.value),
            entry: String(event.target.entry.value),
        }
        
        await fetch(webUrl + "/admin/addCondolence", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(condolenceEntry),
        }).then((response) => response.json()).then((condolenceEntry: CondolenceEntry[]) => {
            props.setCondolenceEntries(condolenceEntry);

            event.target.firstName.value = ""
            event.target.lastName.value = ""
            event.target.city.value = ""
            event.target.state.value = ""
            event.target.relationship.value = ""
            event.target.entry.value = ""
        })            
    }

    return (
        
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>First Name:</h1>
                    <input type="text" autoComplete="off" id="firstName" placeholder="First Name" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>Last Name:</h1>
                    <input type="text" autoComplete="off" id="lastName" placeholder="Last Name" required minLength={3} maxLength={40} />
                </div>
                
                <div>
                    <h1>City:</h1>
                    <input type="text" autoComplete="off" id="city" placeholder="City" required minLength={3} maxLength={40} />
                </div>

                <div>
                    <h1>State:</h1>
                    <input type="text" autoComplete="off" id="state" placeholder="State" required minLength={2} maxLength={40} />
                </div>

                <div>
                    <h1>Choose A Relationship</h1>
                    <select defaultValue="default" id="relationship" name="relationship">
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
                    <h1>Create Entry:</h1>
                    <textarea id="entry" name="entry" rows="5" cols="50" placeholder="What would you like to say about Susan?"></textarea>
                </div>
                

                <button className= "bg-green-500/80 p-2 rounded-md" type="submit">Submit</button>

            </form>
        </div>
    )
}