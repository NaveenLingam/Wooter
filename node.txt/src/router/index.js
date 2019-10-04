const user = require('./user.router');
const candidate = require('./candidate.router');

module.exports = (app) => {
    app.use('/api/v1/user', user);
    app.use('/api/v1/candidate', candidate);
};
