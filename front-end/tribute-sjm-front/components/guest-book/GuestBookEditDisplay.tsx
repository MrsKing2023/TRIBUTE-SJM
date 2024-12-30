import GuestBookCard from "./GuestBookCard";

interface GuestBookEntry {
  id: number;
  firstName: string;
  lastName: string;
  relationship: string;
  city: string;
  state: string;
  entry: string;
}

interface GuestBookEditDisplayProps {
  guestBookEntries: GuestBookEntry[];
  setGuestBookEntries: (entries: GuestBookEntry[]) => void;
}

export default function GuestBookEditDisplay(props: GuestBookEditDisplayProps) {
  const webUrl: string = "http://localhost:8080";

  const allGuestBookEntries = Array.isArray(props.guestBookEntries)
    ? props.guestBookEntries.map((guestBookEntry: GuestBookEntry) => {
        return (
          <GuestBookCard
            key={guestBookEntry.id}
            guestBookEntry={guestBookEntry}
            setGuestBookEntries={props.setGuestBookEntries}
          />
        );
      })
    : [];

  return (
    <div className="entries">
      <p><strong>Guest Book Entries</strong></p>
      {allGuestBookEntries.length > 0 ? (
        allGuestBookEntries
      ) : (
        <p>No guest book entries available.</p>
      )}
    </div>
  );
}

