package fr.bpce.compte.service.impl;

import fr.bpce.compte.service.CompteService;
import fr.bpce.compte.domain.Compte;
import fr.bpce.compte.repository.CompteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Compte}.
 */
@Service
public class CompteServiceImpl implements CompteService {

    private final Logger log = LoggerFactory.getLogger(CompteServiceImpl.class);

    private final CompteRepository compteRepository;

    public CompteServiceImpl(CompteRepository compteRepository) {
        this.compteRepository = compteRepository;
    }

    /**
     * Save a compte.
     *
     * @param compte the entity to save.
     * @return the persisted entity.
     */
    @Override
    public Compte save(Compte compte) {
        log.debug("Request to save Compte : {}", compte);
        return compteRepository.save(compte);
    }

    /**
     * Get all the comptes.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Override
    public Page<Compte> findAll(Pageable pageable) {
        log.debug("Request to get all Comptes");
        return compteRepository.findAll(pageable);
    }

    /**
     * Get one compte by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    public Optional<Compte> findOne(String id) {
        log.debug("Request to get Compte : {}", id);
        return compteRepository.findById(id);
    }

    /**
     * Delete the compte by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(String id) {
        log.debug("Request to delete Compte : {}", id);
        compteRepository.deleteById(id);
    }
}
