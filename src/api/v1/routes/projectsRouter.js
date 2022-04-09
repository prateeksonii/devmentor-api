const projectsRouter = require('express').Router();

const {
  createProject,
  getProjects,
} = require('../controllers/projectsController');

projectsRouter.route('/').get(getProjects).post(createProject);

module.exports = projectsRouter;
