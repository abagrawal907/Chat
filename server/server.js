const path = require('path');
const express = require('express')
const publicPath = path.join(__dirname,'\..\public');
const port = process.env.PORT || 3000
const app = express();

app.use(express.static(publicPath));
app.set('view engine', 'html');

app.get('/',function(req,res){
    res.status(200);
    res.render('index');
})
app.listen(port,(err)=>{ 
    if(err){ 
        console.log("Server could not be stareted due to the error : " + err)
    }
    else{ 
        console.log("Server started succesfully !!") 
    }
})
