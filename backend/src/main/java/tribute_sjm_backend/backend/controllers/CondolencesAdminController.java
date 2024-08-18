package tribute_sjm_backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tribute_sjm_backend.backend.models.CondolenceEntity;
import tribute_sjm_backend.backend.models.dto.CondolenceDTO;
import tribute_sjm_backend.backend.repository.CondolenceRepository;

import java.util.Optional;

@Controller
@CrossOrigin
@RequestMapping(value = "/admin")
public class CondolencesAdminController {

    @Autowired
    private CondolenceRepository condolenceRepository;

    @PostMapping("/addCondolence")
    public ResponseEntity<?> addCondolence(@RequestBody CondolenceDTO condolenceDTO) {

        CondolenceEntity newCondolence = new CondolenceEntity(condolenceDTO.getEntry(), condolenceDTO.getFirstName(), condolenceDTO.getLastName(), condolenceDTO.getRelationship(), condolenceDTO.getEmailAddress(), condolenceDTO.getCity(), condolenceDTO.getState());
        condolenceRepository.save(newCondolence);

        return new ResponseEntity<>(condolenceRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/getCondolenceEntries")
    public ResponseEntity<?> getCondolenceEntryObjects() {
        return new ResponseEntity<>(condolenceRepository.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/removeCondolence/{id}")
    public ResponseEntity<?> removeCondolenceEntry(@PathVariable Long id) {
        Optional<CondolenceEntity> removeCondolence = condolenceRepository.findById(id);

        if(removeCondolence.isPresent()){
            condolenceRepository.delete(removeCondolence.get());
        }
        return new ResponseEntity<>(condolenceRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateEntry(@PathVariable Long id, @RequestBody CondolenceDTO condolenceDTO) {

        Optional<CondolenceEntity> updateCondolenceEntry = condolenceRepository.findById(id);

        if (updateCondolenceEntry.isPresent()) {
            updateCondolenceEntry.get().setEntry(condolenceDTO.getEntry());
            updateCondolenceEntry.get().setFirstName(condolenceDTO.getFirstName());
            updateCondolenceEntry.get().setLastName(condolenceDTO.getLastName());
            updateCondolenceEntry.get().setRelationship(condolenceDTO.getRelationship());
            updateCondolenceEntry.get().setEmailAddress(condolenceDTO.getEmailAddress());
            updateCondolenceEntry.get().setCity(condolenceDTO.getCity());
            updateCondolenceEntry.get().setState(condolenceDTO.getState());
            condolenceRepository.save(updateCondolenceEntry.get());
        }
        return new ResponseEntity<>(condolenceRepository.findAll(), HttpStatus.OK);
    }



}
