const express = require('express');
const catControl = require('../controller/catController');
const route = express.Router();

//category router
route.post('/', catControl.createCategory);

route.get('/',catControl.getAllCategory);
route.get('/:category',catControl.getCategoryByID);

route.put('/:id', catControl.addAttribut);
route.delete('/:id,catControl.deleteCategory');

module.exports= route