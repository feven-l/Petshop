const Pet = require('../Models/models');

module.exports = {
    allPets: (req,res) => {
        Pet.find().sort({"petType": ""})
        .then(data => {
            res.json({message: "success", results: data});
        })
        .catch(err => {
            res.json({message: "error", results: err});
        })
    },
    createPet: (req, res) => {
        Pet.create(req.body)
        .then(data => {
            res.json({message: "success", results: data});
        })
        .catch(err => {
            res.json({message: "error", results: err});
        })
    },
    onePet: (req,res) => {
        Pet.findOne({_id: req.params.id})
        .then(data => {
            res.json({message: "success", results: data});
        })
        .catch(err => {
            res.json({message: "error", results: err});
        })
    },
    editPet: (req,res) => {
        let {_id, ...restOfData } = req.body;
        Pet.findOneAndUpdate({_id: req.params.id}, restOfData, {runValidators: true, new: true})
        .then(data => {
            res.json({message: "success", results: data});
        })
        .catch(err => {
            res.json({message: "error", results: err});
        })
    },
    deletePet: (req, res) => {
        Pet.findOneAndDelete({_id: req.params.id})
        .then(data => {
            res.json({ message: "success", results: data});
        })
        .catch(err => {
            res.json({ message: "error", results: err });
        })
    },
    likePet: (req,res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, {$inc: {Likes: 1}})
        .then(data => {
            res.json({message: "success", results: data});
        })
        .catch(err => {
            res.json({message: "error", results: err})
        })
    },
    
}