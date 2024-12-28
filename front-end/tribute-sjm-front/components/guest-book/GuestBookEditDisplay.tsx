import GuestBookCard from "./GuestBookCard";

interface GuestBookEntry {
  id: Number,
  entry: String,
  firstName: String,
  lastName: String,
  relationship: String,
  city: String,
  state: String,
}

export default function GuestBookEditDisplay(props: any) {

  const webUrl: string = "http://localhost:8080"

  const allGuestBookEntries = props.guestBookEntries.map((guestBookEntry: GuestBookEntry) => {
      return (
        <GuestBookCard
          key={guestBookEntry.id} // Unique key
          guestBookEntry={guestBookEntry}
          setGuestBookEntries={props.setGuestBookEntries}
        />
      );
    });

  return (
    <div>
      <p>Guest Book Entries</p>
      {allGuestBookEntries}
    </div>
  );
}
