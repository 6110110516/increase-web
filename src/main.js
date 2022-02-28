const express = require('express')
const app = express()
const port = 3000
// const result = 0;
var result = parseInt("0");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/increase', (req, res) => {

  result++;

  console.log(result)

  res.send({result:result})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})