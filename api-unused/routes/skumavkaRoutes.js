// api/models/skumavkaRoutes.js
module.exports = (app) => {
    let skumavka = require('../controllers/skumavkaController.js');
    // our Routes
    app.route('/items')
        .post(skumavka.createItem);
}