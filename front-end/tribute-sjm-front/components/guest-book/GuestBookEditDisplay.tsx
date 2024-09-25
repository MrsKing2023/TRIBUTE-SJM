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
            <div className="grid lg:grid-cols-5">
            <p>Display All Guest Book Entries</p>
            {allGuestBookEntries}
            </div>
    
        )

}