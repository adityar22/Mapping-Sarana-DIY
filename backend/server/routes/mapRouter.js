const express = require('express');
const mapControl = require('../controller/mapController');
const route = express.Router();

//mapping router
route.post('/', mapControl.createMapping);

route.get('/',mapControl.getAllMapping );
route.get('/:category', mapControl.getMappingByCat);
route.get('/:id',mapControl.getMappingByID);

route.put('/:id',mapControl.editMapping);

route.put('/:id',mapControl.deleteMapping);

module.exports= route
