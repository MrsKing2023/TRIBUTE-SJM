'use client'

import CondolencesForm from "@/components/condolences-admin/CondolencesForm";
import Condolences from "../page";
import CondolencesEditDisplay from "@/components/condolences-admin/CondolencesEditDisplay";
import {useState, useEffect } from 'react';


interface CondolenceEntry {
    entry: String,
    firstName: String,
    lastName: String,
    relationship: String,
    emailAddress: String,
    city: String,
    state: String,
}

export default function CondolencesAdmin() {

    const webUrl: string = "http://localhost:8080"

    const [condolenceEntries, setCondolenceEntries] = useState<CondolenceEntry[]>([])

    useEffect(function() {
        const getCondolenceEntries =async() => {
            await fetch(webUrl + "/admin/getCondolenceEntries")
            .then(response => response.json())
            .then(condolenceEntry => {
                setCondolenceEntries(condolenceEntry);
            })
        }
        getCondolenceEntries()
    }, [])


    return (
        <div>
        <p>This is the admin page</p>
        

        <div>
            <p>Display the active guestbook</p>
        </div>

        <div > 
        <CondolencesForm 
        setCondolenceEntries={setCondolenceEntries}
        />
        <p>Add guestbook entry</p>
        <p>Display entries being added to the guestbook</p>
        </div>

        <div>
            <CondolencesEditDisplay 
            condolenceEntries={condolenceEntries}
            setCondolenceEntries={setCondolenceEntries}
            />
        </div>


        </div>
    )
}