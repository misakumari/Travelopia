const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000 ;

app.listen(port, () =>{
    console.log(`server is running at port ${port}`);
})
