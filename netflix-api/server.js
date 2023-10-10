const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Successfull");
}).catch((err) => {
    console.log(err.message);
});

app.get("/",(req,res)=>{
    res.status(200).json({"message":"Hey, I'm Up !"})
})

app.use("/api/user",userRoutes);

app.listen(5000,() => {
    console.log("server started on port 5000")
});