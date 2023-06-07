import { DataTypes } from "sequelize";
import { db } from "../db/sequelize-config.js";

export const User = db.define('usuarios',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    modelName: 'usuarios',
    createdAt: false,
    updatedAt: false
});