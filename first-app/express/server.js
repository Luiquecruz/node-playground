const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(port, () => {
  console.log(`App runing on port ${port}`)
})