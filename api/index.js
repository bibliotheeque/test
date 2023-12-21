const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LivresModel = require('./models/Livre')
const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(
    'mongodb+srv://ahiba3991:hiba12345@cluster0.ki6qnwg.mongodb.net/biblio?retryWrites=true&w=majority'
  )
  .then(console.log('hello'))

app.get('/', async (req, res) => {
  const livres = await LivresModel.find()
  res.json(livres)
})

// SIc1rt1VRr1XHCxx

app.listen('3001', () => {
  console.log(`Server is running on http://localhost:3001`)
})
