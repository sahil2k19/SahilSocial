const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const cors = require("cors")
const multer = require("multer")



dotenv.config();
app.use(cors());
mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGO_DB_URL)
.then(()=>{
    return console.log("connect successfully to mongodb")
}).catch((err)=>{
    return console.log(err);
})

// check server home
app.get("/", (req,res)=>{
    res.send("Hi");
})



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


// uploading file 
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname); // sending this name inside reactApplication
    }
})
const upload = multer(storage);

app.post("/api/upload", upload.single("file"), (req,res)=>{
    try{
        return res.status(200).json("File uploaded successfully");
    }catch(err){
        console.log(err);
    }
})


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);


app.listen(3001, ()=>{
    console.log("you are running on http://localhost:3001/");
})