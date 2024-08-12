import CondolenceEntryCard from "./CondolenceEntryCard"

export default function CondolencesEditDisplay(props: any) {

    const webUrl: string = "http://localhost:8080"

    const removeEntry = (entryId: number) => {
        fetch(webUrl + "/admin/removeCondolence/" + entryId, {
            method: "DELETE" 
        }).then((response) => response.json()).then(condolenceEntry => {
            props.setCondolenceEntries(condolenceEntry);
        })
    }

const allEntries = props.condolenceEntries.map((entry:any) => {
    return (
        <CondolenceEntryCard
        key={entry.id}
        entry={entry}
        removeEntry={removeEntry}
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