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
    
    return (
      <div className="card">
        <div className="content">
        <p><strong>Id:</strong> {props.guestBookEntry.id}</p>
          <p><strong>First Name:</strong> {props.guestBookEntry.firstName}</p>
          <p><strong>Last Name:</strong> {props.guestBookEntry.lastName}</p>
          <p><strong>City:</strong> {props.guestBookEntry.city}</p>
          <p><strong>State:</strong> {props.guestBookEntry.state}</p>
          <p><strong>Relationship:</strong> {props.guestBookEntry.relationship}</p>
          <p><strong>Entry:</strong> {props.guestBookEntry.entry}</p>
        </div>
      </div>
    );
  }
  