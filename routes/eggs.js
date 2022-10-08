const express = require('express')
const router = express.Router()
const Egg = require('../models/eggs')

router.get('/', async (req, res) => {
  const eggs = await Egg.find({})
  res.render('eggs/index', { eggs })
})

router.get('/new', (req, res) => {
  res.render('eggs/new')
})

router.post('/', async (req, res) => {
  const egg = new Egg(req.body)
  await egg.save()
  req.flash('success', 'successfully added')
  res.redirect('/')
})

router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  const egg = await Egg.findById(id)
})

module.exports = router
