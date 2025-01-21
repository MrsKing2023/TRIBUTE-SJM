package tribute_sjm_backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tribute_sjm_backend.backend.models.CondolenceEntity;
import tribute_sjm_backend.backend.models.GuestBookEntity;
import tribute_sjm_backend.backend.models.dto.CondolenceDTO;
import tribute_sjm_backend.backend.models.dto.GuestBookDTO;
import tribute_sjm_backend.backend.repository.GuestBookRepository;

import java.util.Optional;

@Controller
@CrossOrigin
@RequestMapping(value= "/guestBook")
public class GuestBookController {
    @Autowired
    private GuestBookRepository guestBookRepository;


    @PostMapping("/addGuestBookEntry")
    public ResponseEntity<?> addGuestBookEntry(@RequestBody GuestBookDTO guestBookDTO) {
        GuestBookEntity newGuestBookEntry = new GuestBookEntity(guestBookDTO.getFirstName(), guestBookDTO.getLastName(),  guestBookDTO.getCity(), guestBookDTO.getState(), guestBookDTO.getRelationship(), guestBookDTO.getEntry());
        guestBookRepository.save(newGuestBookEntry);

        return new ResponseEntity<>(guestBookRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/getGuestBookEntries")
    public ResponseEntity<?> getGuestBookEntryObjects() {
        return new ResponseEntity<>(guestBookRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/removeGuestBookEntry/{id}")
    public ResponseEntity<?> removeGuestBookEntry(@PathVariable Long id) {
        Optional<GuestBookEntity> removeEntry = guestBookRepository.findById(id);

        if(removeEntry.isPresent()){
            guestBookRepository.delete(removeEntry.get());
        }
        return new ResponseEntity<>(guestBookRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateEntry(@PathVariable Long id, @RequestBody GuestBookDTO guestBookDTO) {

        Optional<GuestBookEntity> updateGuestBookEntry = guestBookRepository.findById(id);

        if (updateGuestBookEntry.isPresent()) {
            updateGuestBookEntry.get().setFirstName(guestBookDTO.getFirstName());
            updateGuestBookEntry.get().setLastName(guestBookDTO.getLastName());
            updateGuestBookEntry.get().setCity(guestBookDTO.getCity());
            updateGuestBookEntry.get().setState(guestBookDTO.getState());
            updateGuestBookEntry.get().setRelationship(guestBookDTO.getRelationship());
            updateGuestBookEntry.get().setEntry(guestBookDTO.getEntry());
            guestBookRepository.save(updateGuestBookEntry.get());
        }
        return new ResponseEntity<>(guestBookRepository.findAll(), HttpStatus.OK);
    }
}
