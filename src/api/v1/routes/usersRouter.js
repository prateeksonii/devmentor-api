const usersRouter = require('express').Router();

const { upsertUser } = require('../controllers/usersController');

usersRouter.post('/', upsertUser);

module.exports = usersRouter;
