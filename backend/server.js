const express = require("express");
const app = express();
const  dotenv  =  require ("dotenv").config();
const port  = process.env.PORT || 5000 ; 
// setup router 
app.use("/api/goals" ,require("./Routes/goalRoutes"))
// error Hander 
const {errorHandler} = require("./middleware/errorMiddleware");
app.use(errorHandler);
app.use(express.json())
app.use(express.urlencoded({ extended :false}))
console.log(" hello world");

app.listen(port  , (()=>console.log(`server stared on port ${port}`)));