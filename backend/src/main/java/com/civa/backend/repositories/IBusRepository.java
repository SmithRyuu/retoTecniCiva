package com.civa.backend.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.civa.backend.models.entity.BusModel;

@Repository
public interface IBusRepository extends JpaRepository<BusModel, Long> {

}
