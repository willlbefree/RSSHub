module.exports = (router) => {
    router.get('/channel/:id/:embed?', require('./channel'));
    router.get('/playlist/:id/:embed?', require('./playlist'));
    router.get('/subscriptions/:embed?', require('./subscriptions'));
    router.get('/c/:username/:embed?', require('./user'));
};
