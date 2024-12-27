'use client'

import { useState } from 'react';

export default function GuestBookForm(props: any) {
  const [entry, setEntry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [relationship, setRelationship] = useState('default');

  const webUrl: string = "http://localhost:8080";

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const guestBookEntry = {
      entry: entry,
      firstName: firstName,
      lastName: lastName,
      relationship: relationship,
      city: city,
      state: state,
    };

    try {
      const response = await fetch(webUrl + "/guestBook/addGuestBookEntry", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(guestBookEntry),
      });

      const data = await response.json();
      props.setGuestBookEntries((prevEntries: any) => [...prevEntries, data]); // Adding the new entry to the existing list

      // Reset form fields after submission
      setEntry('');
      setFirstName('');
      setLastName('');
      setCity('');
      setState('');
      setRelationship('default');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="guestbookform-container">
      <div className="guestform">
        <form onSubmit={handleSubmit}>
          <h1>Guest Book</h1>

          <div className="entry">
            <h1>First Name:</h1>
            <input
              type="text"
              autoComplete="off"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              minLength={3}
              maxLength={40}
            />
          </div>

          <div className="entry">
            <h1>Last Name:</h1>
            <input
              type="text"
              autoComplete="off"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              minLength={3}
              maxLength={40}
            />
          </div>

          <div className="entry">
            <h1>City:</h1>
            <input
              type="text"
              autoComplete="off"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              minLength={3}
              maxLength={40}
            />
          </div>

          <div className="entry">
            <h1>State:</h1>
            <input
              type="text"
              autoComplete="off"
              id="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              minLength={2}
              maxLength={40}
            />
          </div>

          <div className="entry">
            <h1>Choose A Relationship</h1>
            <select
              id="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              required
            >
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

          <div className="slideshow-container">
            <p>Not sure of what to say?</p>

            <div className="mySlides"><p>What is your first memory of Susan?</p></div>
            <div className="mySlides"><p>What is something you learned from Susan?</p></div>
            <div className="mySlides"><p>Talk about a shared experience you had with Susan.</p></div>
            <div className="mySlides"><p>Describe a time when Susan made you laugh or smile.</p></div>
            <div className="mySlides"><p>What is something you did together that you enjoyed?</p></div>
            <div className="mySlides"><p>Tell us about a special moment you shared with Susan</p></div>
            <div className="mySlides"><p>Share a favorite memory you have of Susan.</p></div>
            <div className="mySlides"><p>What is something you will always remember about Susan?</p></div>
            <div className="mySlides"><p>Describe a place or activity that reminds you of Susan.</p></div>

            <div>
              <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>

            <div className="dot-container">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="dot" onClick={() => currentSlide(i + 1)}></span>
              ))}
            </div>
          </div>

          <div>
            <textarea
              id="text"
              className="text-box"
              placeholder="Answer a question, share your own memory, or leave condolences"
            ></textarea>
          </div>

          <button className="bg-green-500/80 p-2 rounded-md" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
