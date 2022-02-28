const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/mean', (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let c = parseInt(req.body.c);
  console.log(a,b,c)


  let max = a;
  if(b > max){
    max = b;
 
  }
  if (c > max){
    max = c
  
  }
  
  res.json({max:max})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})