const express = require('express')
const app = express()
const port = 3000

const audio = require('./responses/audio')
const text = require('./responses/text')
const video = require('./responses/video')

app.get('/audio/', (req, res) => {
  res.send(audio)
})

app.get('/text/', (req, res) => {
  res.send(text)
})

app.get('/video/', (req, res) => {
  res.send(video)
})

app.get('/audio/:id', (req, res) => {
  const { id } = req.params

  const resource = audio.find(function(obj) {
    return obj.id == id
  })

  res.send(resource)
})

app.get('/text/:id', (req, res) => {
  const { id } = req.params

  const resource = text.find(function(obj) {
    return obj.id == id
  })

  res.send(resource)
})

app.get('/video/:id', (req, res) => {
  const { id } = req.params

  const resource = video.find(function(obj) {
    return obj.id == id
  })

  res.send(resource)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
