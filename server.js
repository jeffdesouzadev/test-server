const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.get('/json', (req, res) => {
  res.status(200).send({'key': 'value'})
})

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
});