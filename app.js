const express = require("express")

const app = express();

/*
app has useful methods like
app.get() takes two arguments url and cb func
app.post()
app.put()
app.delete()
*/

app.get( '/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/numbers', (req, res) => {
  res.send([1,2,3]);
})

app.listen(3000, () => console.log('listening on port 3000 using express'))
