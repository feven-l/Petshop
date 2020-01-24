const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {type: String, unique:true, required:[true, "You must enter pet's name"], minlength:[3, "name has to be longer than 3 letters"]},
    petType: {type: String, required:[true, "You must enter pet's type"], minlength:[3, "Type has to be longer than 3 letters"]},
    description: {type: String, required:[true, "You much give a description"], minlength:[3, "Description has to be longer than 3 letters"]},
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type: String},
    Likes: {type: Number, default: 0}
})

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;




