const express = require('express')
const router = express.Router()
const Price = require('../models/prices')

router.get('/', async (req, res) => {
  const prices = await Price.find({})
  res.render('prices/index', { prices })
})

router.get('/new', (req, res) => {
  res.render('prices/new')
})

router.post('/', async (req, res) => {
  const price = new Price(req.body)
  await price.save()
  req.flash('success', 'successfully added')
  res.redirect('/')
})

module.exports = router
