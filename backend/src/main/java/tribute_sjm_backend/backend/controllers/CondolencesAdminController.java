package tribute_sjm_backend.backend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping(value = "/admin")
public class CondolencesAdminController {
    @PostMapping("/addCondolence")
    public ResponseEntity<?> addCondolence() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
