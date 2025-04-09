package com.civa.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.civa.backend.models.entity.BusModel;
import com.civa.backend.services.BusService;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.domain.Page;




@RestController
@RequestMapping("/bus")
public class BusController {

    @Autowired
    private BusService busService;

    @GetMapping
    public Page<BusModel> getBuses(@RequestParam(defaultValue = "0") int page, 
                                   @RequestParam(defaultValue = "10") int size) { 
        return this.busService.getBuses(page, size);
    }

    @PostMapping
    public BusModel saveBus(@RequestBody BusModel bus) {
        
        return this.busService.saveBus(bus);
    }

    @GetMapping(path = "/{id}")
    public Optional<BusModel> getById(@PathVariable("id") Long id) {
        return this.busService.getById(id);
    }

    @PutMapping
    public BusModel updateBusById(@RequestBody BusModel bus) {
        return this.busService.updateById(bus, bus.getId());
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable("id") Long id) {
        boolean ok = this.busService.deleteBus(id);
        if (ok) {
            return "Bus with id"+ id + " deleted";
        } else {
            return "Error";
        }
    }
    
    
    

}
