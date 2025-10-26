const { DataTypes } = require("sequelize");
const con = require("./db");

const Exercise = con.define('exercise', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    output: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Exercise;