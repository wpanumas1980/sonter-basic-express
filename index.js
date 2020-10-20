const express = require("express");
const studentRoute = require("./routes/students")
const app = express();
const port = 5555;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/students",studentRoute);//ส่งไปที่ student routes

app.listen(port, () => {
    console.log(`server starting on port ${port}`);
});

