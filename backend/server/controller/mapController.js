const client = require('../database/client')

exports.createMapping = (req, res)=>{
    const {name, coordinat, timestamp, cat, imageURL, condition, atr1, atr2, atr3, atr4, atr5} = req.body

    client.query(
                    `
                        insert into facility(
                            facName, facCat, facCoordinat, facTimestamp, imageURL, condition, facAtr1, facAtr2, facAtr3, facAtr4, facAtr5, status
                        )
                        values('${name}','${cat}', '${coordinat}', '${timestamp}', '${imageURL}', '${condition}', '${atr1}', '${atr2}', '${atr3}', '${atr4}', '${atr5}', 'active');
                    `, (err, result)=>{
                    if(!err){
                        res.send("Inventory added!")
                    }
                    else{
                        res.send(err.message)
                    }
                })
}

exports.getAllMapping = (req, res)=>{
    console.log("loading data")
    client.query(`select * from facility`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.getMappingByCat = (req, res)=>{
    const category = req.params.category
    console.log(category)
    client.query(`select * from facility where faccat='${category}'`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.getMappingByID = (req, res)=>{
    const id = req.params.id
    client.query(`select * from facility where facid='${id}'`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.searchMapping = (req, res)=>{

}

exports.editMapping = (req, res)=>{
    const id = req.params.id
    const {name, coordinat, timestamp, imageURL, condition, atr1, atr2, atr3, atr4, atr5} = req.body
    client.query(
                    `
                        update facility
                        set
                            facName = '${name}', 
                            facCoordinat = '${coordinat}', 
                            facTimestamp = '${timestamp}',
                            imageURL = '${imageURL}',
                            condition = '${condition}',
                            facAtr1 = '${atr1}', 
                            facAtr2 = '${atr2}', 
                            facAtr3 = '${atr3}', 
                            facAtr4 = '${atr4}', 
                            facAtr5 = '${atr5}'
                        where facid = '${id}'
                    `, (err, result)=>{
                    if(!err){
                        console.log(id)
                        res.send("Inventory updated!")
                    }
                    else{
                        console.log(id)
                        res.send(err.message)
                    }
                })
}

exports.deleteMapping = (req, res)=>{
    client.query(
        `
            update facility
            set status = 'deactive'
            where facID='${req.params.id}'
        `, (err, result) =>{
            if(!err){
                res.send("Inventory deleted")
            }
            else{
                res.send(err.message)
            }
        }
    )
}

