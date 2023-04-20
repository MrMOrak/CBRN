package com.cbrn.database;

import com.cbrn.entity.Occurrence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.awt.geom.Point2D;

@Controller
@RequestMapping(path="/occ")
public class OccurrenceController {

    @Autowired
    private OccurrenceRepository occurrenceRepository;

    @PostMapping(path = "/addocc")
    public @ResponseBody String addOcc (@RequestParam String occType, @RequestParam Point2D.Float coordinates) {

        Occurrence occurence = new Occurrence();

        occurence.setOccType(occType);
        occurence.setCoordinates(coordinates);
        occurrenceRepository.save(occurence);

        return "Successfully added";
    }

    @GetMapping(path = "/occurrences")
    public @ResponseBody Iterable<Occurrence> getAllOccurrences(){
        return occurrenceRepository.findAll();
    }
}
