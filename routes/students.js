const express = require("express");
const {uniqueId} = require("lodash")
const router = express.Router();

let students =[];

//Read
router.get("/", (req,res)=>{
    res.status(200).send(students);
});
//Read
router.get("/:id", (req,res)=>{
    const id = req.params.id;
    const targetStudent = students.find(std => std.id === id);
    res.status(200).send(targetStudent);
});
//Create
router.post("/", (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = {id:uniqueId(), name, age, gender};
    students.push(newStudent);
    res.status(201).send(newStudent);
});
//Delete
router.delete("/:id",(req,res)=>{
    const targetId = req.params.id;
    students = students.filter(std => std.id !== targetId);
    res.status(204).send();
});
//Update
router.put("/:id",(req,res)=>{
    const targetId = req.params.id;
    const {name, age, gender } = req.body;
    const targetStudentIdx = students.findIndex(std => std.id === targetId);
    students[targetStudentIdx] = {id:targetId, name, age, gender };
    res.status(200).send({message:"Update"});
})


module.exports = router;