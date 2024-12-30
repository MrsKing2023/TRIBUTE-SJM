package tribute_sjm_backend.backend.models;


import jakarta.persistence.*;
import jakarta.validation.Valid;

@Entity
public class GuestBookEntity extends AbstractEntity {

    private String firstName;
    private String lastName;
    private String city;
    private String state;
    private String relationship;
    //@Column(length = 3000, columnDefinition = "MEDIUMBLOB NOT NULL")
    public String entry;

    @OneToOne(cascade = CascadeType.ALL)
    @Valid
    private CondolenceEntity condolenceEntity; //relate GuestBookEntity class to CondolenceEntity class

    public GuestBookEntity(String firstName, String lastName, String city, String state, String relationship, String entry) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.state = state;
        this.relationship = relationship;
        this.entry = entry;
    }

    public GuestBookEntity() {
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

    public String getRelationship() {
        return relationship;
    }

    public void setRelationship(String relationship) {
        this.relationship = relationship;
    }

    public String getEntry() {
        return entry;
    }

    public void setEntry(String entry) {
        this.entry = entry;
    }

    public CondolenceEntity getCondolenceEntity() {
        return condolenceEntity;
    }

    public void setCondolenceEntity(CondolenceEntity condolenceEntity) {
        this.condolenceEntity = condolenceEntity;
    }
}
