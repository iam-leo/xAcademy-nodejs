import { DataTypes } from "sequelize";
import { db } from "../db/sequelize-config.js";

export const Library = db.define('libreria', {
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    existe: {
        type: DataTypes.INTEGER,
        allowNull: false 
    }
}, {
    modelName: 'libreria',
    createdAt: false,
    updatedAt: false
});