// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_desc: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 10,
            validate: {
                isDecimal: true
            }
        },
        product_spec: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2,
            validate: {
                isNumeric: true
            }
        },
        is_stock: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        slug: {
            type: DataTypes.STRING,
            lowercase: true
        },
        product_image_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sub_category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'subCategory',
                key: 'id'
            }
        },
        color_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'color',
                key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;
