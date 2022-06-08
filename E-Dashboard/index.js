const express  = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Site is Working");
});
app.listen(8999);