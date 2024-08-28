const dotenv = require("dotenv");
dotenv.config();

let mongoose = require("mongoose")
const app = require("./app");
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }

let port = process.env.PORT || 3000;
let DB_URL = process.env.DB_URL || 'mongodb+srv://minhajrafeeq7:wxgEp6xi2HbznxXj@employee.w4kob.mongodb.net/?retryWrites=true&w=majority&appName=employee';

mongoose.connect(DB_URL).then(() => {
    console.log("DB connected Successfully");
}).catch((err) => {
    console.log("DB failed to connect", err);
})


app.listen(port, () => {
    console.log("Server listening to port", port);
})