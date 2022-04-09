const db = require('../../../db');

exports.createProject = async (req, res, next) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { name, code, description, score, difficulty } = req.body;

    const existingProject = await db.project.findUnique({
      where: { code },
    });

    if (existingProject) {
      res.status(409);
      throw new Error('Project already exists');
    }

    const project = await db.project.create({
      data: {
        name,
        description,
        difficulty,
        score,
        code,
      },
    });

    return res.status(201).json({
      ok: true,
      project,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const { difficulty } = req.query;

    let projects = [];

    if (!difficulty) {
      projects = await db.project.findMany();
    } else {
      projects = await db.project.findMany({ where: { difficulty } });
    }

    return res.json({
      ok: true,
      projects,
    });
  } catch (err) {
    return next(err);
  }
};
