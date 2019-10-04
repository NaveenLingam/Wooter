const router = require('express').Router();
const user = require('../controller/user.controller');

// Create a new User
router.post('/', user.createUser);

// Retrieve all Users
router.get('/', user.getAllUser);

// Retrieve a single User by _id
router.get('/:id', user.getUser);

// Retrieve  Users any params
router.get('/find/param', user.getUserByParams);

// Update a User with object id
router.put('/:id', user.updateUser);

// Delete a User with object id
router.delete('/:id', user.deleteUser);

module.exports = router;