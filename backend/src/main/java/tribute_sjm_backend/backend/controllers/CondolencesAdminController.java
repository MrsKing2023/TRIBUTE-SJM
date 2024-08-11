package tribute_sjm_backend.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import tribute_sjm_backend.backend.models.CondolenceEntity;
import tribute_sjm_backend.backend.models.dto.CondolenceDTO;
import tribute_sjm_backend.backend.repository.CondolenceRepository;

@Controller
@CrossOrigin
@RequestMapping(value = "/admin")
public class CondolencesAdminController {

    @Autowired
    private CondolenceRepository condolenceRepository;

    @PostMapping("/addCondolence")
    public ResponseEntity<?> addCondolence(@RequestBody CondolenceDTO condolenceDTO) {

        CondolenceEntity newCondolence = new CondolenceEntity(condolenceDTO.getEntry(), condolenceDTO.getFirstName(), condolenceDTO.getLastName(), condolenceDTO.getEmailAddress(), condolenceDTO.getRelationship(), condolenceDTO.getCity(), condolenceDTO.getState());

        condolenceRepository.save(newCondolence);

        return new ResponseEntity<>(condolenceRepository.findAll(), HttpStatus.OK);
    }


}
