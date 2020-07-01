module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send({ error: 'Login Required!' });
    res.redirect('/login');
};
