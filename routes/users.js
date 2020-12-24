const router = require('express').Router();
const { getUsers, getUserById, createUser, deleteUser } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

module.exports = router;