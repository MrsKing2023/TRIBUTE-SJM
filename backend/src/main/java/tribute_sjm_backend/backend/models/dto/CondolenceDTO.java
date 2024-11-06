package tribute_sjm_backend.backend.models.dto;



public class CondolenceDTO {

    private String firstName;
    private String lastName;
    private String city;
    private String state;
    private String relationship;
    public String entry;


    public CondolenceDTO(String firstName, String lastName, String city, String state, String relationship, String entry) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.relationship = relationship;
        this.entry = entry;

    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }


    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getRelationship() {
        return relationship;
    }

    public String getEntry() {
        return entry;
    }
}
