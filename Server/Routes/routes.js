const controller = require('../Controllers/controller');
const path = require('path');

module.exports = app =>{
    app.get('/pets', controller.allPets);
    app.post('/pets', controller.createPet);
    app.get('/pets/:id', controller.onePet);
    app.put('/pets/:id', controller.editPet);
    app.delete('/pets/:id', controller.deletePet);
    app.put('/pets/like/:id', controller.likePet);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}