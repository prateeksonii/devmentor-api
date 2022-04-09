const router = require('express').Router();

const projectsRouter = require('./projectsRouter');
const usersRouter = require('./usersRouter');

router.use('/users', usersRouter);
router.use('/projects', projectsRouter);

module.exports = router;
