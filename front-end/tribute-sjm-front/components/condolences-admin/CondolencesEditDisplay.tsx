import CondolenceEntryCard from "./CondolenceEntryCard"

interface CondolenceEntry {
    id: number,
    firstName: string,
    lastName: string,
    relationship: string,
    city: string,
    state: string,
    entry: string,
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

const allEntries = props.condolenceEntries.map((condolenceEntry: CondolenceEntry) => {
    return (
        <CondolenceEntryCard
        key={condolenceEntry.id}
        condolenceEntry={condolenceEntry}
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