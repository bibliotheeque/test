const mongoose = require('mongoose')
const LivresSchema = new mongoose.Schema({
  ISBN: {type:Number},
  Titre: {type: String},
  DateEdition: {type: Date},
  Auteurs: {type: String},
  Prix: {type:Number},
  Disponibilite: {type: Boolean},
})
const LivresModel = mongoose.model('livres', LivresSchema) 
module.exports = LivresModel
