const path = require("path");
const express = require("express");
const multer  = require('multer')

const app = express();
const PORT = 8000;

const upload = multer({ dest: 'uploads/' })

app.set("view engine" , "jsx");
app.set("components" , path.resolve("./components"));
app.use(express.urlencoded({extended:false}))

app.use(express.json());

app.get("/" , (req , res) => {
    return res.render("NewTranscript");
});
app.post('/upload' , upload.single('uploadedFile'), (req,res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
})


app.listen(PORT , () => console.log('server started'));