const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserProduct extends Model { }

UserProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        in_cart: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        purchased: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        purchased_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_products',
    }
);


module.exports = UserProduct;
