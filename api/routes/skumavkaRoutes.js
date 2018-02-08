// api/models/skumavkaRoutes.js
module.exports = (app) => {
    let skumavka = require('../controllers/skumavkaController');
    // our Routes
    app.route('/items')
        .post(skumavka.createItem);
}