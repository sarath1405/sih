const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://sarath14:Gd0b6Vc5Awqkw1ev@cluster0.arzcw.mongodb.net/unique_id?retryWrites=true&w=majority").then(console.log('mongoDB connected'))
.catch("error");

app.use("/", require("./routes/Route"));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})


