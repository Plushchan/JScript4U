module.exports = {
    registerG: (req, res) => {
        res.render('register');
    },
    registerP: (req, res) => {
        res.send('test');
    }
}