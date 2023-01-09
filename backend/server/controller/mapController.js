const client = require('../database/client')

exports.createMapping = (req, res)=>{
    const {name, coordinat, timestamp, cat, atr1, atr2, atr3, atr4, atr5} = req.body

    client.query(
                    `
                        insert into facility(
                            facName, facCat, facCoordinat, facTimestamp,facAtr1, facAtr2, facAtr3, facAtr4, facAtr5
                        )
                        values('${name}','${cat}', '${coordinat}', '${timestamp}', '${atr1}', '${atr2}', '${atr3}', '${atr4}', '${atr5}');
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
    const category = req.body

    client.query(`select * from facility where facCat=${category}`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.getMappingByID = (req, res)=>{
    const facID = req.body

    client.query(`select * from facility where facID=${facID}`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.editMapping = (req, res)=>{
    const {catID, name, coordinat, timestamp, atr1, atr2, atr3, atr4, atr5} = req.body

    client.query(
                    `
                        update facility
                        set
                            facName = '${name}', 
                            facCoordinat = '${coordinat}', 
                            facTimestamp = '${timestamp}',
                            facAtr1 = '${atr1}', 
                            facAtr2 = '${atr2}', 
                            facAtr3 = '${atr3}', 
                            facAtr4 = '${atr4}', 
                            facAtr5 = '${atr5}'
                        )
                        where catID = '${catID}'
                    `, (err, result)=>{
                    if(!err){
                        res.send("Inventory added!")
                    }
                    else{
                        res.send(err.message)
                    }
                })
}

exports.deleteMapping = (req, res)=>{
    const facID = req.body

    client.query(
        `
            delete from facility where facID='${facID}'
        `        
    )
}

