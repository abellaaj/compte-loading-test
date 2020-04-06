package fr.bpce.compte.repository;

import fr.bpce.compte.domain.Compte;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Compte entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CompteRepository extends MongoRepository<Compte, String> {
}
