package com.cbrn;

import com.cbrn.entity.Occurrence;
import com.cbrn.entity.OccurrenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@Controller
@RequestMapping(path="/occ")
public class OccurrenceController {

    @Autowired
    private OccurrenceRepository occurrenceRepository;

    @PostMapping(path = "/addocc")
    public @ResponseBody String addOcc (@RequestBody Occurrence occurrence){

        occurrenceRepository.save(occurrence);
        return "New Occurrence saved!";
    }

    @GetMapping(path = "/occurrences")
    public @ResponseBody Iterable<Occurrence> getAllOccurrences(){
        return occurrenceRepository.findAll();
    }

    @GetMapping(path = "/occurrences/{id}")
    public @ResponseBody Iterable<Occurrence> getOccurrenceById(@PathVariable String id){
        return occurrenceRepository.findAllById(Collections.singleton(Integer.valueOf(id)));
    }

}
