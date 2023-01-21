const client = require('../database/client')

exports.createCategory = (req, res)=>{
    if(!req.body){
        res.send("data cannot empty!")
    };

    //insert to table category
    const {catName, catAtr, catAtrType, catIcon} = req.body
    client.query(
        `
            insert into category(catname, catatr, catatrtype, catIcon, status) values('${catName}', '${catAtr}', '${catAtrType}', '${catIcon}', 'active');
        `,
        (err, result)=>{
            if(!err){
                res.send("category added!")
            }
            else{
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
        update category set status = 'deactive' where catName = '${category}';
        update facility set status = 'deactive' where facCat = '${category}';
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