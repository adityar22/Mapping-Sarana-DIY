const category = require('../model/categoryModel')
const cloudinary = require('../database/cloudinary')

exports.createCategory = async(req, res)=>{
    if(!req.body){
        res.send("Data cannot empty!")
    };

    //insert to table category
    const {name, icon, atribut, atributType} = req.body
    
    try {
        const resImage = await cloudinary.uploader.upload(icon, {
            folder: 'MappingDIY',
            width: 32,
            crop: "scale"
        })

        await category.create({
            name: name,
            icon: resImage.secret_url,
            status: 'active',
            atribut: atribut,
            atributType: atributType
        });
        res.status(200).json({
            success: true,
            message: 'New category added!',
            data: req.body
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getAllCategory = async(req, res) =>{
    try {
        const categories = await category.findAll({
            status: 'active'
        })
        res.status(200).json({
            success: true,
            message: 'Facilities exist!',
            data: categories
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getCategoryByID = async(req, res)=>{
    const name = req.params.category
    
    try {
        const categories = await category.findAll({
            where:{name: name}
        })
        res.status(200).json({
            success: true,
            message: 'Category exist!',
            data: categories
        })
    } catch (error) {
        console.log(error)
    }
}

exports.addAttribut = (req, res)=>{
    const category = req.params.category
    const {atr, atrtype} = req.body
    
}

exports.deleteCategory = async(req, res) =>{
    const name = req.params.id
    
    try {
        const categories = await category.update({
            status: 'deactive'
        }, {
            where:{
                name: name
            }
        })
        res.status(200).json({
            success: true,
            message: 'Category deleted!',
            data: categories
        })
    } catch (error) {
        console.log(error)
    }
}