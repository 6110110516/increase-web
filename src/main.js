const express = require('express')
const app = express()
const port = 3000
// const result = 0;
var result = parseInt("0");

app.use(express.json());

app.get('/home', (req, res) => {
  res.sendFile("D:\Code\web-client\increase-web\increase-web\public\test.html")
  // res.render("../public/test.html")
})

app.post('/api/increase', (req, res) => {

  result++;

  console.log(result)

  res.send({result:result})
})

app.post('/api/refresh', (req, res) => {
  console.log(result)

  res.send({result:result})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})