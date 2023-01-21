const express = require('express');
const mapControl = require('../controller/mapController');
const route = express.Router();

//mapping router
route.post('/', mapControl.createMapping);

route.get('/',mapControl.getAllMapping );
route.get('/category/:category', mapControl.getMappingByCat);
route.get('/id/:id',mapControl.getMappingByID);

route.put('/:id',mapControl.editMapping);

route.delete('/:id',mapControl.deleteMapping);

module.exports= route
