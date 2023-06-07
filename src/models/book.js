import { DataTypes } from "sequelize";
import { db } from "../db/sequelize-config.js";

export const Book = db.define('libro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    existe: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'libreria',
            key: 'id'
          } 
    },
}, {
    modelName: 'libro',
    createdAt: false,
    updatedAt: false
});