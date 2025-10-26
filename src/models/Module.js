const { DataTypes } = require("sequelize");
const con = require("./db");

const Module = con.define('module', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Module;