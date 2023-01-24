const express = require('express');
const bodyParser = require('body-parser');

const client = require('./server/database/client');
const mapRouter = require('./server/routes/mapRouter');
const catRouter = require('./server/routes/catRouter');
const app = express();
const cors = require('cors');

client.connect(err=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('Database connected')
    }
});


app.use(bodyParser.json());
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/mapping', mapRouter);
app.use('/api/category', catRouter);

app.listen(3100, ()=>{
    console.log('Server is running')
})
