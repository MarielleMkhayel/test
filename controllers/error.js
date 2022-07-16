const path = require('path');

exports.getError = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not Found',
        path: '/404'
    });
};

// exports.getError = (req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
// };