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

}

exports.deleteCategory = (req, res) =>{

}