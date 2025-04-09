package com.civa.backend.services;


import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.civa.backend.models.entity.BusModel;
import com.civa.backend.repositories.IBusRepository;

@Service
public class BusService {

    @Autowired
    IBusRepository busRepository;

    public Page<BusModel> getBuses(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return busRepository.findAll(pageable);
    }

    public BusModel saveBus (BusModel bus) {
    
        return busRepository.save(bus);
    }

    public Optional<BusModel> getById(Long id) {
        return busRepository.findById(id);
    }

    public BusModel updateById(BusModel request, Long id) {

        BusModel bus = busRepository.findById(id).get();
        bus.setNumeroBus(request.getNumeroBus());
        bus.setPlaca(request.getPlaca());
        bus.setCaracteristicas(request.getCaracteristicas());
        bus.setMarca(request.getMarca());
        bus.setEstado(request.isEstado());
        return busRepository.save(bus) ;
    }

    public Boolean deleteBus(Long id) {
        try {
            busRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
