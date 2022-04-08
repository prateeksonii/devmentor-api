const db = require('../../../db');

exports.upsertUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await db.user.upsert({
      create: { email, name },
      update: {},
      where: { email },
    });

    return res.json({ ok: true, user });
  } catch (err) {
    return next(err);
  }
};
