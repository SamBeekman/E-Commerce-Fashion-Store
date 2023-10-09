
const { Color } = require('../models');

const colorData = [
  {
    color_name: 'Red',
   
  },
  {
    color_name: 'Green',
   
  },
   {
    color_name: 'Brown',
    
  },
 
];

const seedcolors = () => Color.bulkCreate(colorData);

module.exports = seedcolors;
