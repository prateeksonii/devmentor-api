const { default: axios } = require('axios');

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    console.log('here');
    const response = await axios.get('https://api.github.com/', {
      headers: {
        Authorization: authorization,
      },
    });

    console.log(response.data);
    return next();
  } catch (err) {
    return next(err);
  }
};
