package tribute_sjm_backend.backend.models.dto;



public class CondolenceDTO {

    public String entry;
    private String firstName;
    private String lastName;
    private String relationship;
    private String city;
    private String state;

    public CondolenceDTO(String entry, String firstName, String lastName, String relationship, String city, String state) {
        this.entry = entry;
        this.firstName = firstName;
        this.lastName = lastName;
        this.relationship = relationship;
        this.city = city;
        this.state = state;
    }

    public String getEntry() {
        return entry;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getRelationship() {
        return relationship;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }
}
