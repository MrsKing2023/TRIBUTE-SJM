package tribute_sjm_backend.backend.models.dto;



public class CondolenceDTO {

    private String firstName;
    private String lastName;
    private String relationship;
    private String emailAddress;
    private String entry;
    private String city;
    private String state;

    public String getState() {
        return state;
    }

    public String getCity() {
        return city;
    }

    public String getEntry() {
        return entry;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getRelationship() {
        return relationship;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }
}
