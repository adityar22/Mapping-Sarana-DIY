const facility = require('../model/facilityModel');
const cloudinary = require('../database/cloudinary');

exports.createMapping = async (req, res) => {
    const { name, coordinat, category, imageURL, atr1, atr2, atr3, atr4, atr5 } = req.body
    const user = req.headers.authorization
    if (user != null) {
        try {
            const imgURL = []
            for (let index = 0; index < imageURL.length; index++) {
                const resImage = await cloudinary.uploader.upload(imageURL[index], {
                    folder: 'MappingDIY',
                    width: 720,
                    crop: "scale"
                })
                imgURL[index] = resImage.secure_url
            }
            await facility.create({
                name: name,
                coordinat: coordinat,
                category: category,
                imageURL: imgURL,
                status: 'active',
                atribut1: atr1,
                atribut2: atr2,
                atribut3: atr3,
                atribut4: atr4,
                atribut5: atr5
            })
            res.status(200).json({
                success: true,
                message: 'New facility added!',
                data: req.body
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    } else {
        res.status(400).json({
            message: 'Youre not athorized'
        })
    }
}

exports.getAllMapping = async (req, res) => {
    const user = req.headers.authorization
    if (user != null) {
        try {
            const facilities = await facility.findAll({
                where: { status: 'active' }
            })
            res.status(200).json({
                success: true,
                message: 'Facilities exist!',
                data: facilities
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    } else {
        res.status(400).json({
            message: 'Youre not athorized'
        })
    }
}

exports.getMappingByCat = async (req, res) => {
    const cat = req.params.category
    const user = req.headers.authorization
    if (user != null) {
        try {
            const facilities = await facility.findAll({
                where: { category: cat }
            })
            res.status(200).json({
                success: true,
                message: 'Facilities exist!',
                data: facilities
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }
    else {
        res.status(400).json({
            message: 'Youre not athorized'
        })
    }
}

exports.getMappingByID = async (req, res) => {
    const id = req.params.id
    const user = req.headers.authorization
    if (user != null) {
        try {
            const facilities = await facility.findAll({
                where: { id: id }
            })
            res.status(200).json({
                success: true,
                message: 'Facility exist!',
                data: facilities
            })
        } catch (error) {
            console.log(error)
        }
    }
    else {
        res.status(400).json({
            message: 'Youre not athorized'
        })
    }
}

exports.searchMapping = (req, res) => {

}

exports.editMapping = async (req, res) => {
    const id = req.params.id
    const { name, coordinat, imageURL, atr1, atr2, atr3, atr4, atr5 } = req.body
    const user = req.headers.authorization
    if (user != null) {
        try {
            const imgURL = []
            for (let index = 0; index < imageURL.length; index++) {
                const resImage = await cloudinary.uploader.upload(imageURL[index], {
                    folder: 'MappingDIY',
                    width: 720,
                    crop: "scale"
                })
                imgURL[index] = resImage.secure_url
            }
            const updated = await facility.update({
                name: name,
                coordinat: coordinat,
                imageURL: imgURL,
                atribut1: atr1,
                atribut2: atr2,
                atribut3: atr3,
                atribut4: atr4,
                atribut5: atr5
            }, {
                where: {
                    id: id
                },
                returning: true,
                plain: true
            })

            res.status(200).json({
                success: true,
                message: 'Facility updated!',
                data: updated
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }
    else {
        res.status(400).json({
            message: 'Youre not athorized'
        })
    }
}

exports.deleteMapping = async (req, res) => {
    const id = req.params.id;
    const user = req.headers.authorization
    if (user != null) {
        try {
            const deleted = await facility.update({
                status: 'deactive'
            }, {
                where: {
                    id: id
                },
                returning: true,
                plain: true
            })

            res.status(200).json({
                success: true,
                message: 'facility deactived!',
                data: deleted
            })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }
    else {
        res.status(400).json({
            message: 'Youre not athorized'
        })
    }
}

