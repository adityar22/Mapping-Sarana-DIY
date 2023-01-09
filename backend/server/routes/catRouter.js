const express = require('express');
const route = express.Router();

const catControl = require('../controller/catController');

//category router
route.post('/', catControl.createCategory);

route.get('/',catControl.getAllCategory);
route.get('/:id',catControl.getCategoryByID);

route.delete('/:id,catControl.deleteCategory');

module.exports= route