'use client'

import GuestBookEditDisplay from "@/components/guest-book/GuestBookEditDisplay";
import GuestBookForm from "@/components/guest-book/GuestBookForm";
import { useState, useEffect} from 'react';

interface GuestBookEntry {
    id: number,
    firstName: string,
    lastName: string,
    relationship: string,
    city: string,
    state: string,
    entry: string,

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
        <div className="memories">
        <p><strong>Memories and Condolences for Susan Jones-Miree</strong></p>
        <div>
            <GuestBookForm
            setGuestBookEntries={setGuestBookEntries}
            />
        </div>

        <div className="entries">
        <div> 
      <p><strong>Guest Book Entries</strong></p>
      </div>
            <GuestBookEditDisplay 
            guestBookEntries={guestBookEntries}
            setGuestBookEntries={setGuestBookEntries}
            />
        </div>

        </div>

    )



}