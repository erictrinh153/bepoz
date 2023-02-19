const express = require("express");
const app = express();
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const info = require("./routes/getProducts");
const dotenv = require("dotenv");
const options= {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

dotenv.config();
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL, options).then(()=> console.log('DB connection established')).catch((error) => console.log('Error', error));

app.use(express.json());

app.use("/api/auth", auth);
app.use("/api", info);

app.listen(8800, ()=> {
    console.log('Listening on 8800');
})