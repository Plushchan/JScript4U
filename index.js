require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const authr = require('./src/routes/authRoutes');
const app = express();
const path = require('path');
const con = require('./src/models/db');
const User = require('./src/models/User');
const apir = require('./src/routes/api');
const session = require('express-session');
const Exercise = require('./src/models/Exercise');
const Explication = require('./src/models/Explication');
const Module = require('./src/models/Module');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(expressLayouts);
app.set('layout', 'layouts/body');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(session({
    secret: '519847330270Oo',
    resave: false,
    saveUninitialized: false,
}));

con.authenticate()
.then(() => {
    console.log("DB => [OK]");

    // Models
    (async () => {
        try {
            await User.sync({
                force: false,
                alter: false
            });

            await Exercise.sync({
                force: false,
                alter: false
            });

            await Explication.sync({
                force: false,
                alter: false
            });

            await Module.sync({
                force: false,
                alter: false
            });

        } catch(err) {
            console.error(err);
        }
    })();

    // Routers
    app.use('/', authr);
    app.use('/api', apir);

    app.listen(process.env.PORT, () => {
        console.log(`Server => localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error(err.message);
});
