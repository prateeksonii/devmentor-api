const projectsRouter = require('express').Router();

// const { isAuthenticated } = require('../controllers/authController');
const {
  createProject,
  getProjects,
  getProjectByCode,
} = require('../controllers/projectsController');

projectsRouter.get('/:code', getProjectByCode);
projectsRouter.route('/').get(getProjects).post(createProject);

module.exports = projectsRouter;
