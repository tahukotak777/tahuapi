require('dotenv').config()
const express = require('express')
const groqai = require('./libs/groq')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('this is tahu api')
})

app.get('/groqai/:content', async (req, res) => {
  const reply = await groqai(req.params.content)
  res.send(JSON.stringify(reply.choices[0].message.content))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})