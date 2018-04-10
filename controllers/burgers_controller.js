var express = require("express");
const db = require('../models');
const router = express.Router();

router.get("/", function (req, res) {
    // console.log(req);
    //call the model method that gets all the dbs
    // db.burger.findAll().then(function(err, data) {

    //     if (err) { return res.status(500).end(); }
    //     //var datas = data.filter(item => item.devoured == 0);
    //     //console.log(datas);
    //     res.render("index", { Activeburgers: data.filter(item => item.devoured == 0) , Devouredburgers : data.filter(item => item.devoured == 1) });
    // });
    db.burger.findAll().then(function(data) {
      res.render("index", { Activeburgers: data.filter(item => item.devoured == 0) , Devouredburgers : data.filter(item => item.devoured == 1) });
    });

});

// router.get("/", function (req, res) {

//     // call the model method that gets all the dbs
//     db.devoured(function (err, data) {

//         if (err) { return res.status(500).end(); }
//         // console.log(data);
//         res.render("index", { Devoureddbs: data });
//     });
// });

// Create a new db
router.post("/burgers", function (req, res) {

    // call the model method that creates plan
    db.burger.create({
        burger_name :req.body.burger, 
    })
        .then(function (data) {

       // if (err) { return res.status(500).end(); }

        res.json({ id: data.insertId });

    })
});

// Update a db
router.put("/burgers/:id", function (req, res) {
    db.burger.update({
       devoured : 1
    },{
        where :{
            id: req.params.id
        }
    }).then(function (data) {

        //if (err) { return res.status(500).end() }

        if (data.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }

        res.status(200).end();
    })

});

module.exports = router;