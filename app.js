const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    console.log('Hello from node');

});
app.listen(3000);