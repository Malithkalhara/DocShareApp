var express = require('express');
var router = express.Router();
var user = require('../models/user.model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/docShare');
var multer = require('multer');
var namify = require('filenamify');

var DIR = './uploads/';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
});

var upload = multer({ storage: storage }).single('file');

var thingSchema = new mongoose.Schema({
    title: String,
    code:String,
    subject: String,
    year:String,
    notetype:String,
    date: { type: Date, default: Date.now },
    content: mongoose.Schema.Types.Mixed
});
var Thing = mongoose.model('Thing', thingSchema);

router.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            return res.json({ status: 500, message: "upload_error" });
        }
        next();
    })
},
    (req, res) => {
        console.log(req.body);
        var content = {};
        content.fileId = req.file.filename;
        //mongoose.Types.ObjectId(obj.course);
        content.fileType = req.file.mimetype;
        content.fileName = req.file.originalname;
        console.log(content.fileName);

        var thing = new Thing({
            title: req.body.title,
            code:req.body.code,
            subject:req.body.subject,
            // desc: req.body.desc,
            // course: mongoose.Types.ObjectId(req.body.course),
            year:req.body.year,
            notetype:req.body.notetype,
            content: content
        });

        thing.save(function (err) {
            if (err) {
                return res.json({ status: 500, message: "error_saving_to_db", data: err.message });
            }
            return res.json({ status: 200, message: "upload COmpleted" });
        });
    });

router.get('/allUploads',(req,res)=>{
    Thing.find().sort({'date':-1}).then(data=>{
        res.json({status:"200",data:data})
    })
})

router.get('/download/:fid', function (req, res, next) {
    res.download('./uploads/' + req.params.fid);
  });


module.exports = router;
