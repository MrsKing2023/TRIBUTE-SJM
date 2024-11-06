'use client'

import GuestBookEditDisplay from "@/components/guest-book/GuestBookEditDisplay";
import GuestBookForm from "@/components/guest-book/GuestBookForm";
import { useState, useEffect} from 'react';

interface GuestBookEntry {
    id: Number,
    firstName: String,
    lastName: String,
    city: String,
    state: String,
    relationship: String,
    entry: String,

}

export default function GuestBook() {

    const webUrl: string = "http://localhost:8080"

    const [guestBookEntries, setGuestBookEntries] = useState<GuestBookEntry[]>([])
    
    useEffect(function() {
      const getGuestBookEntries = async() => {
        await fetch(webUrl + '/guestBook/getGuestBookEntries')
        .then(response => response.json())
        .then(guestBookEntry => {
            setGuestBookEntries(guestBookEntry);
    
        }) 
      }
      getGuestBookEntries();
    }, [])
    

    return(
        <div>
        <p>Memories and Condolences for Susan Jones Miree</p>
        <div>
            <GuestBookForm
            setGuestBookEntries={setGuestBookEntries}
            />
        </div>

        <div>
            <GuestBookEditDisplay 
            guestBookEntries={guestBookEntries}/>
        </div>

        </div>
    )


}