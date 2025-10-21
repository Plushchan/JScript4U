require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const authr = require('./src/routes/authRoutes');
const app = express();
const path = require('path');
const con = require('./src/models/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(expressLayouts);
app.set('layout', 'layouts/body');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

con.authenticate()
.then(() => {
    console.log("DB => [OK]");

    // Routers
    app.use('/', authr);

    app.listen(process.env.PORT, () => {
        console.log(`Server => localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error(err.message);
});
