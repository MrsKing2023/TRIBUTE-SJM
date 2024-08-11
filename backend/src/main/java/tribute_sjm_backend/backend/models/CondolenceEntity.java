package tribute_sjm_backend.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CondolenceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String relationship;
    private String emailAddress;
    private String entry;
    private String city;
    private String state;

    public CondolenceEntity(String firstName, String lastName, String relationship, String emailAddress, String entry, String city, String state) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.relationship = relationship;
        this.emailAddress = emailAddress;
        this.entry = entry;
        this.city = city;
        this.state = state;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getEntry(String entry) {
        return entry;
    }

    public void setEntry(String entry) {
        this.entry = entry;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
