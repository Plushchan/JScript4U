const { DataTypes } = require("sequelize");
const con = require("./db");

const Explication = con.define('explication', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    slug: {
        type:  DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Explication;