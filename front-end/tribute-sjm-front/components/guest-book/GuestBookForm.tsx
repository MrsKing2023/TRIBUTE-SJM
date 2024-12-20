'use client'


export default function GuestBookForm(props: any) {

const webUrl: string = "http://localhost:8080"

const handleSubmit = async(event: any) => {
    event.preventDefault();

    const guestBookEntry = {
            entry: String(event.target.entry.value),
            firstName: String(event.target.firstName.value),
            lastName: String(event.target.lastName.value),
            relationship: String(event.target.relationship.value),
            city: String(event.target.city.value),
            state: String(event.target.state.value),
        }

        await fetch(webUrl + "/guestBook/addGuestBookEntry", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(guestBookEntry),
        }).then((response) => response.json()).then(guestBookEntry => {
            props.setGuestBookEntries(guestBookEntry);

            event.target.entry.value = ""
            event.target.firstName.value = ""
            event.target.lastName.value = ""
            event.target.relationship.value = ""
            event.target.city.value = ""
            event.target.state.value = ""
        })
    }

    

    return (
        <div className="guestformbox">
        <form onSubmit={handleSubmit}>
            <h1>Guest Book </h1>
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
        <div className="slideshow-container">
            <textarea id="text" className="text-box" placeholder="Answer a question, share your own memory, or leave condolences"></textarea>                            
           <div className="suggestedEntries">Not sure of what to say? </div>
            <div className="slideshow">
            <div className="mySlides">What is your first memory of Susan?</div>
            <div className="mySlides">What is something you learned from Susan?</div>
            <div className="mySlides">Talk about a shared experience you had with Susan.</div>
            <div className="mySlides">Describe a time when Susan made you laugh or smile.</div>
            <div className="mySlides">What is something you did together that you enjoyed?</div>
            <div className="mySlides">Tell us about a special moment you shared with Susan.</div>
            <div className="mySlides">Share a favorite memory you have of Susan.</div>
            <div className="mySlides">What is something you will always remember about Susan?</div>
            <div className="mySlides">Describe a place or activity that reminds you of Susan.</div>
        </div>    
        </div>
        </div>

        

        <div>

        </div>
           <button className= "bg-green-500/80 p-2 rounded-md" type="submit">Submit</button>
        </form>        

        </div>
    )
    
}