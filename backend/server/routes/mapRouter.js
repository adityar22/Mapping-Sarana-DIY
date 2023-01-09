const express = require('express');
const route = express.Router();

const mapControl = require('../controller/mapController');

//mapping router
route.post('/', mapControl.createMapping);

route.get('/',mapControl.getAllMapping );
route.get('/filter', mapControl.getMappingByCat);
route.get('/:id',mapControl.getMappingByID);

route.put('/:id',mapControl.editMapping);

route.delete('/:id',mapControl.deleteMapping);

module.exports= route
