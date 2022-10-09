const express = require('express')
const router = express.Router()
const Cocoon = require('../models/cocoons')

router.get('/', async (req, res) => {
  const cocoons = await Cocoon.find({})
  res.render('cocoons/index', { cocoons })
})

router.get('/new', (req, res) => {
  res.render('cocoons/new')
})

router.post('/', async (req, res) => {
  const cocoon = new Cocoon(req.body)
  await cocoon.save()
  req.flash('success', 'succesfully added')
  res.redirect('/')
})

module.exports = router
