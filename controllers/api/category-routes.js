const router = require('express').Router();
const { Category ,SubCategory } = require('../../models');
const slugify=require('slugify')

router.get('/', async(req, res) => {
  try{
    const catData=await Category.findAll({
      include:[{ model: SubCategory }],
 });
 res.status(200).json({
catData,
message:"you get all categories"
 });
}catch(error){
  res.status(500).json(error);
}

});

//get data by id
router.get('/:id', async(req, res) => {
  try{
   const catData=await Category.findByPk(req.params.id,{
    include:[{ model: SubCategory }],
   });
   if(!catData){
    res.status(404).json({message:'No category found with that id!'})
    return;
   }
   res.status(200).json(catData)
  }catch(error){
    res.status(500).json(error);
  }
 
});


//create category 
router.post('/', async(req, res) => {

  const { category_name } = req.body;


 try{
  const catData=await Category.create({
     category_name,
     slug: slugify(category_name)
  });
  console.log(catData)
  res.status(200).json(catData)

 }catch(error){
  res.status(500).json(error);
 }
});


//update data
router.put('/:id', async(req, res) => {
 try{
 
  const {category_name} =  req.body;
const catData=await Category.update({category_name,slug:slugify(category_name)},{
  where:{
    id:req.params.id
  }
})

if(!catData){
  res.status(404).json({message:'No category found with that id!'})
  return;
 }
 res.status(200).json({message:'updated category!!',catData})

 }catch(error){
  res.status(500).json(error);
 }
});

//delete category
router.delete('/:id', async(req, res) => {
 try{
const catData=await Category.destroy({
  where:{
    id:req.params.id,
  },
})
if(!catData){
  res.status(404).json({message:'No cat found with that id!'})
  return;
 }
 res.status(200).json({message:'delete category!!'})
 }catch(error){
  res.status(500).json(error);
 }
});

module.exports = router;