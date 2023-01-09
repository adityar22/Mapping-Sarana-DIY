const client = require('../database/client')

exports.createCategory = (req, res)=>{
    if(!req.body){
        res.send("data cannot empty!")
    };

    //insert to table category
    const {catName, catAtr, catAtrType} = req.body
    client.query(
        `
            insert into category(catname, catatr, catatrtype) values('${catName}', '${catAtr}', '${catAtrType}');
        `,
        (err, result)=>{
            if(!err){
                res.send("category added!")
            }
            else{
                console.log(catName, catAtr, catAtrType)
                res.send(err.message)
            }
        }
    );
    
}

exports.getAllCategory = (req, res) =>{
    client.query(`select * from category`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.getCategoryByID = (req, res)=>{
    const category = req.params.category
    client.query(`select * from category where catname = '${category}'`, (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(err.message)
        }
    })
}

exports.addAttribut = (req, res)=>{
    const category = req.params.category
    const {atr, atrtype} = req.body
    client.query(
        `
            update category
            set catatr = '${atr}',
                catatrtype = '${atrtype}'
            where catname = '${category}'
        `
    )
}

exports.deleteCategory = (req, res) =>{
    const category = req.params.id
    client.query(
        `
            delete from facility where faccat = '${category}';
            delete from category where catname = '${category}';
        `,(err,reesult)=>{
            if(!err){
                res.send("facilities deleted!")
            }
            else{
                (err.message);
            }
        }
    )
}