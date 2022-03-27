const express = require('express')
const router = express.Router()
const item = require('../models/model')

router.route("/inst").post((req, res) => {
    
    const unqid = req.body.unqid;
    const regid = req.body.regid;
    const name = req.body.name;
    const college = req.body.college;
    const email = req.body.email;
    const phone = req.body.phone;

    const newItem = new item({
        unqid,
        regid,
        name,
        college,
        email,
        phone
    });

    newItem.save();
})

router.route("/data").get((req, res) => {
    item.find().then(Item => res.json(Item));
})

router.route("/:id").get((req, res) => {
    item.findOne({"unqid": req.params.id}).then(Item => res.json(Item));
})

module.exports = router;