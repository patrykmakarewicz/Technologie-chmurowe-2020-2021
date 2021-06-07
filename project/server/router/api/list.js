const express = require("express");
const router = express.Router();

const List = require("../../src/models/List.model");

router.post("/add", (req, res) => {  
    const newToDo = new List({
        login: req.body.login,
        description: req.body.description,
        date: req.body.date
    });

    newToDo
    .save()
    .then(toDo => res.json(toDo))
    .catch(err => console.log(err))  
  });

  router.get("/get/:login", (req, res) => {
    List.find({login: req.params.login}).then(list => {
        if (!list){
            return res.status(404).json({ error: "TODO List not found" });
        }
        else{
            res.json(list)
        }
    })
  });

  router.delete('/delete/:id', (req, res) => {
      List.findOneAndRemove({_id: req.params.id}).then(item =>{
        if (!item){
            return res.status(404).json({ error: "Position not found"});
        }
        else{
            return res.status(200);
        }
      })
        .catch(err => console.log(err)) 
  });

  router.put('/update/:id', (req, res) => {
      List.findOneAndUpdate(
        {_id: req.params.id},
        { 
            $set: {done: true}, 
            new: true
        })
        .catch(err => console.log(err))
  });


  module.exports = router;