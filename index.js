require('dotenv').config()
const express = require('express')
const groqai = require('./libs/groq')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('this is tahu api')
})

app.get('/groqai/:content', async (req, res) => {
  const reply = await groqai(req.params.content)
  res.json(reply)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})