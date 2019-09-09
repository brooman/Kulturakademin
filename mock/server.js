const express = require('express')
const cors = require('cors')
const app = express()
const port = 3300

const audio = require('./responses/audio')
const text = require('./responses/text')
const video = require('./responses/video')

app.use(cors())

app.get('/', (req, res) => {
  console.log('/')
  res.send({ audio, text, video })
})

app.get('/audio/', (req, res) => {
  console.log('/audio/')
  res.send(audio)
})

app.get('/text/', (req, res) => {
  console.log('/text/')
  res.send(text)
})

app.get('/video/', (req, res) => {
  console.log('/video/')
  res.send(video)
})

app.get('/audio/:id', (req, res) => {
  const { id } = req.params
  console.log('/audio/' + id)

  const resource = audio.find(function(obj) {
    return obj.id == id
  })

  if (resource) {
    res.send(resource)
  }

  res.status(404).send('{}')
})

app.get('/text/:id', (req, res) => {
  const { id } = req.params
  console.log('/text/' + id)

  const resource = text.find(function(obj) {
    return obj.id == id
  })

  if (resource) {
    res.send(resource)
  }

  res.status(404).send('{}')
})

app.get('/video/:id', (req, res) => {
  const { id } = req.params
  console.log('/video/' + id)

  const resource = video.find(function(obj) {
    return obj.id == id
  })

  if (resource) {
    res.send(resource)
  }

  res.status(404).send('{}')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
