import GuestBookCard from "./GuestBookCard"

export default function GuestBookEditDisplay(props: any) {


    const allGuestBookEntries = props.guestBookEntries.map((guestBookEntry: any) => {
        return (
            <GuestBookCard
            key={guestBookEntry.id}
            guestBookEntry={guestBookEntry}
            />
        )
    })
    
        return (
            <div>
            <p>Guest Book Entries</p>
            {allGuestBookEntries}
            </div>
    
        )

}