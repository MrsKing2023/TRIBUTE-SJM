'use client'

import CondolencesForm from "@/components/condolences-admin/CondolencesForm";
import Condolences from "../page";
import CondolencesEditDisplay from "@/components/condolences-admin/CondolencesEditDisplay";
import {useState, useEffect } from 'react';


interface CondolenceEntry {
    id: Number,
    firstName: String,
    lastName: String,
    city: String,
    state: String,
    relationship: String,
    entry: String,

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
        <p>This is the Admin page. Admin has full CRUD functionality</p>
        
        <div> 
        <CondolencesForm 
        setCondolenceEntries={setCondolenceEntries}
        />
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