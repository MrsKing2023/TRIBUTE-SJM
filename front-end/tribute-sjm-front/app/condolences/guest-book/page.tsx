'use client'

import GuestBookEditDisplay from "@/components/guest-book/GuestBookEditDisplay";
import GuestBookForm from "@/components/guest-book/GuestBookForm";
import { useState, useEffect} from 'react';

interface GuestBookEntry {
    entry: String,
    firstName: String,
    lastName: String,
    relationship: String,
    emailAddress: String,
    city: String,
    state: String,
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
        <p>This is the Guestbook page</p>
        <div>
            <GuestBookForm/>
        </div>

        <div>
            <GuestBookEditDisplay 
            guestBookEntries={guestBookEntries}/>
        </div>

        </div>
    )


}