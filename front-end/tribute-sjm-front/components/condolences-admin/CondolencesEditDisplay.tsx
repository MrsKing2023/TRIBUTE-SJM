import CondolenceEntryCard from "./CondolenceEntryCard"

interface CondolenceEntry {
    entry: String,
    firstName: String,
    lastName: String,
    relationship: String,
    emailAddress: String,
    city: String,
    state: String,
}

export default function CondolencesEditDisplay(props: any) {

    const webUrl: string = "http://localhost:8080"

    const removeEntry = (entryId: number) => {
        fetch(webUrl + "/admin/removeCondolence/" + entryId, {
            method: "DELETE" 
        }).then((response) => response.json()).then((condolenceEntry: CondolenceEntry[]) => {
            props.setCondolenceEntries(condolenceEntry);
        })
    }

const allEntries = props.condolenceEntries.map((entry: CondolenceEntry) => {
    return (
        <CondolenceEntryCard
        key={entry.id}
        entry={entry}
        removeEntry={removeEntry}
        setCondolenceEntries={props.setCondolenceEntries}
        />
    )
})

    return (
        <div className="grid lg:grid-cols-5">
        <p>Display condolence entries</p>
        {allEntries}
        </div>

    )

}