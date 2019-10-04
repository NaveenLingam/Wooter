const router = require('express').Router();
const candidate = require('../controller/candidate.controller');

// Create a new Candidate
router.post('/', candidate.createCandidate);

// Retrieve all Candidates
router.get('/', candidate.getAllCandidate);

// Retrieve a single Candidate by _id
router.get('/:id', candidate.getCandidate);

// Retrieve  Candidates any params
router.get('/find/param', candidate.getCandidateByParams);

// Update a Candidate with object id
router.put('/:id', candidate.updateCandidate);

// Delete a Candidate with object id
router.delete('/:id', candidate.deleteCandidate);

module.exports = router;