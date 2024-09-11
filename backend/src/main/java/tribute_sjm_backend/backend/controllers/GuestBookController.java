package tribute_sjm_backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import tribute_sjm_backend.backend.models.GuestBookEntity;
import tribute_sjm_backend.backend.models.dto.GuestBookDTO;
import tribute_sjm_backend.backend.repository.GuestBookRepository;

@Controller
@CrossOrigin
@RequestMapping(value= "/guestBook")
public class GuestBookController {
    @Autowired
    private GuestBookRepository guestBookRepository;


    @PostMapping("/addGuestBookEntry")
    public ResponseEntity<?> addGuestBookEntry(@RequestBody GuestBookDTO guestBookDTO) {
        GuestBookEntity newGuestBookEntry = new GuestBookEntity(guestBookDTO.getEntry(),
                                                                guestBookDTO.getFirstName(),
                                                                guestBookDTO.getLastName(),
                                                                guestBookDTO.getRelationship(),
                                                                guestBookDTO.getEmailAddress(),
                                                                guestBookDTO.getCity(),
                                                                guestBookDTO.getState());
        guestBookRepository.save(newGuestBookEntry);

        return new ResponseEntity<>(guestBookRepository.findAll(), HttpStatus.OK);
    }
}
