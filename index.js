var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require("multer");
var upload = multer({dest: "uploads/"});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single("upfile") , function(req, res) {
  if (!req.file) {
    return res.status(400).json({error: "Invalid file"});
  }

  const filename = req.file.originalname;
  const fileType = req.file.mimetype;
  const fileSize = req.file.size;

  res.json({
    name: filename,
    type: fileType,
    size: fileSize
  });
  
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
