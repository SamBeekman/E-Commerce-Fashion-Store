const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class SubCategory extends Model { }

SubCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    sub_category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
       lowercase:true
      },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
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
    modelName: 'subCategory',
  }
);

SubCategory.afterCreate(function(cat, options, fn) {
    var slugify = require('slug');
    var s = slugify(cat.category_name);
    cat.updateAttributes({ slug: s });
    fn(null, cat);
});  

module.exports = SubCategory;
